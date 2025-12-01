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
              // Draw white circle background for icon with shadow
              ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
              ctx.shadowBlur = 12;
              ctx.shadowOffsetX = 0;
              ctx.shadowOffsetY = 3;
              ctx.fillStyle = '#ffffff';
              ctx.beginPath();
              const iconSize = 108; // w-12 = 48px * 3 scale minus padding
              const iconRadius = iconSize / 2;
              const iconX = x + 42; // paddingLeft 14px * 3
              const iconY = y + 144; // paddingTop 48px * 3
              const iconCenterX = iconX + iconRadius;
              const iconCenterY = iconY + iconRadius;
              ctx.arc(iconCenterX, iconCenterY, iconRadius, 0, Math.PI * 2);
              ctx.fill();
              
              // Draw icon with circular clip
              ctx.shadowBlur = 0;
              ctx.beginPath();
              ctx.arc(iconCenterX, iconCenterY, iconRadius - 9, 0, Math.PI * 2);
              ctx.closePath();
              ctx.clip();
              ctx.drawImage(icon, iconX + 6, iconY + 6, iconSize - 12, iconSize - 12);
              ctx.restore();
              resolve(null);
            };
            icon.onerror = () => resolve(null);
          });
        }
        
        // Setup text rendering
        ctx.textBaseline = 'top';
        ctx.textAlign = 'left';
        
        // Draw channel name with enhanced shadow
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(0, 0, 0, 1)';
        ctx.shadowBlur = 42;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 12;
        ctx.font = '700 48px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        const textX = x + 42 + 108 + 48; // paddingLeft + iconSize + gap(16px * 3)
        const textStartY = y + 144 + 12; // align with icon center-ish
        ctx.fillText(channelName, textX, textStartY);
        // Double shadow for extra depth
        ctx.shadowBlur = 24;
        ctx.shadowOffsetY = 6;
        ctx.fillText(channelName, textX, textStartY);
        
        // Draw "Sponsored" text with enhanced shadow
        ctx.shadowBlur = 36;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 9;
        ctx.font = '600 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.globalAlpha = 0.9;
        ctx.fillText('Sponsored', textX, textStartY + 54); // marginTop 2px * 3 + font height
        // Double shadow
        ctx.shadowBlur = 21;
        ctx.shadowOffsetY = 6;
        ctx.fillText('Sponsored', textX, textStartY + 54);
        ctx.globalAlpha = 1;
        
        // Draw ad title with better spacing and shadow
        ctx.shadowBlur = 48;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 12;
        ctx.font = '400 45px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        const maxWidth = w - 108;
        const words = adTitle.split(' ');
        let line = '';
        let lineY = y + 144 + 108 + 54; // paddingTop + icon + marginBottom(18px * 3)
        const lineHeight = 63; // 15px * 1.4 * 3
        let lineCount = 0;
        
        for (let i = 0; i < words.length && lineCount < 2; i++) {
          const testLine = line + words[i] + ' ';
          const metrics = ctx.measureText(testLine);
          if (metrics.width > maxWidth && i > 0) {
            ctx.fillText(line.trim(), x + 36, lineY);
            ctx.shadowBlur = 24;
            ctx.shadowOffsetY = 6;
            ctx.fillText(line.trim(), x + 36, lineY);
            ctx.shadowBlur = 42;
            ctx.shadowOffsetY = 12;
            line = words[i] + ' ';
            lineY += lineHeight;
            lineCount++;
          } else {
            line = testLine;
          }
        }
        if (lineCount < 2) {
          ctx.fillText(line.trim(), x + 36, lineY);
          ctx.shadowBlur = 24;
          ctx.shadowOffsetY = 6;
          ctx.fillText(line.trim(), x + 36, lineY);
        }
        
        // Draw CTA button with proper centering and enhanced styling
        const buttonY = y + h - 222; // h is total height, minus paddingBottom(22px*3) and button height
        const buttonHeight = 156; // height 52px * 3
        const buttonWidth = w - 84; // full width minus padding
        const buttonX = x + 42; // paddingLeft 14px * 3
        
        // Button shadow - enhanced
        ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
        ctx.shadowBlur = 84;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 24;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.roundRect(buttonX, buttonY, buttonWidth, buttonHeight, 36);
        ctx.fill();
        
        // Button text - perfectly centered
        ctx.shadowBlur = 0;
        ctx.shadowOffsetY = 0;
        ctx.fillStyle = '#000000';
        ctx.font = '700 48px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(ctaText, buttonX + buttonWidth / 2, buttonY + buttonHeight / 2);
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