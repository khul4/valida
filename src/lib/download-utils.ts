import html2canvas from 'html2canvas';

export const downloadElementAsImage = async (
  element: HTMLElement,
  filename: string,
  backgroundColor = '#ffffff'
): Promise<void> => {
  try {
    // Wait for images to fully load
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Capture with html2canvas
    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor,
      logging: false,
      width: element.offsetWidth,
      height: element.offsetHeight,
    } as Record<string, unknown>);
    
    // Now manually draw the bottom content that html2canvas missed
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Find the bottom content elements
      const bottomContent = element.querySelector('[data-bottom-content="true"]') as HTMLElement;
      if (bottomContent) {
        const rect = bottomContent.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const scale = 3;
        
        // Calculate position on canvas
        const x = (rect.left - elementRect.left) * scale;
        const y = (rect.top - elementRect.top) * scale;
        const w = rect.width * scale;
        const h = rect.height * scale;
        
        // Draw gradient background
        const gradient = ctx.createLinearGradient(x, y + h, x, y);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.98)');
        gradient.addColorStop(0.6, 'rgba(0, 0, 0, 0.95)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.7)');
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, w, h);
        
        // Get text content
        const channelName = bottomContent.querySelector('[data-channel-name]')?.textContent || '';
        const adTitle = bottomContent.querySelector('[data-ad-title]')?.textContent || '';
        const ctaText = bottomContent.querySelector('[data-cta-text]')?.textContent || '';
        const iconImg = bottomContent.querySelector('[data-ad-icon]') as HTMLImageElement;
        
        // Draw icon if exists
        if (iconImg && iconImg.src) {
          const icon = new Image();
          icon.crossOrigin = 'anonymous';
          icon.src = iconImg.src;
          await new Promise((resolve) => {
            icon.onload = () => {
              ctx.save();
              // Draw white circle background for icon
              ctx.fillStyle = '#ffffff';
              ctx.beginPath();
              ctx.arc(x + 51, y + 123, 51, 0, Math.PI * 2);
              ctx.fill();
              
              // Draw icon with circular clip
              ctx.beginPath();
              ctx.arc(x + 51, y + 123, 48, 0, Math.PI * 2);
              ctx.closePath();
              ctx.clip();
              ctx.drawImage(icon, x + 3, y + 75, 96, 96);
              ctx.restore();
              resolve(null);
            };
            icon.onerror = () => resolve(null);
          });
        }
        
        // Setup text rendering
        ctx.textBaseline = 'top';
        ctx.textAlign = 'left';
        
        // Draw channel name
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
        ctx.shadowBlur = 18;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 6;
        ctx.font = 'bold 42px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.fillText(channelName, x + 120, y + 102);
        
        // Draw "Sponsored" text
        ctx.font = '500 33px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.globalAlpha = 0.9;
        ctx.fillText('Sponsored', x + 120, y + 150);
        ctx.globalAlpha = 1;
        
        // Draw ad title
        ctx.font = '400 39px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        const maxWidth = w - 168;
        const words = adTitle.split(' ');
        let line = '';
        let lineY = y + 210;
        const lineHeight = 50;
        let lineCount = 0;
        
        for (let i = 0; i < words.length && lineCount < 2; i++) {
          const testLine = line + words[i] + ' ';
          const metrics = ctx.measureText(testLine);
          if (metrics.width > maxWidth && i > 0) {
            ctx.fillText(line.trim(), x + 36, lineY);
            line = words[i] + ' ';
            lineY += lineHeight;
            lineCount++;
          } else {
            line = testLine;
          }
        }
        if (lineCount < 2) {
          ctx.fillText(line.trim(), x + 36, lineY);
        }
        
        // Draw CTA button
        const buttonY = y + h - 102;
        const buttonHeight = 96;
        const buttonWidth = w - 168;
        const buttonX = x + 36;
        
        // Button shadow
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowBlur = 24;
        ctx.shadowOffsetY = 12;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.roundRect(buttonX, buttonY, buttonWidth, buttonHeight, 24);
        ctx.fill();
        
        // Button text
        ctx.shadowBlur = 0;
        ctx.shadowOffsetY = 0;
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 42px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(ctaText, buttonX + buttonWidth / 2, buttonY + 30);
      }
    }
    
    // Convert to blob
    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) reject(new Error('Failed to create blob'));
          else resolve(blob);
        },
        'image/png',
        1.0
      );
    });
    
    if (!blob) {
      throw new Error('Failed to create image blob');
    }
    
    // Create download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Cleanup
    setTimeout(() => {
      URL.revokeObjectURL(url);
      showSuccessNotification('Downloaded successfully!');
    }, 100);
  } catch (error) {
    console.error('Download error:', error);
    showErrorNotification('Failed to download. Please try again.');
    throw error;
  }
};

export const showSuccessNotification = (message: string) => {
  const notification = document.createElement('div');
  notification.textContent = `✓ ${message}`;
  notification.style.cssText = `
    position: fixed;
    top: 24px;
    right: 24px;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    padding: 14px 24px;
    border-radius: 8px;
    z-index: 99999;
    font-weight: 500;
    font-size: 14px;
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    animation: slideInDown 0.3s ease-out;
  `;
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInDown {
      from { 
        transform: translateY(-10px);
        opacity: 0;
      }
      to { 
        transform: translateY(0);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(notification);
  setTimeout(() => {
    if (notification.parentNode) {
      document.body.removeChild(notification);
    }
  }, 3000);
};

export const showErrorNotification = (message: string) => {
  const notification = document.createElement('div');
  notification.textContent = `✕ ${message}`;
  notification.style.cssText = `
    position: fixed;
    top: 24px;
    right: 24px;
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    color: white;
    padding: 14px 24px;
    border-radius: 8px;
    z-index: 99999;
    font-weight: 500;
    font-size: 14px;
    box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    animation: slideInDown 0.3s ease-out;
  `;
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInDown {
      from { 
        transform: translateY(-10px);
        opacity: 0;
      }
      to { 
        transform: translateY(0);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(notification);
  setTimeout(() => {
    if (notification.parentNode) {
      document.body.removeChild(notification);
    }
  }, 4000);
};