import html2canvas from 'html2canvas';

export const downloadElementAsImage = async (
  element: HTMLElement,
  filename: string,
  backgroundColor = '#ffffff'
): Promise<void> => {
  try {
    // Wait for images to fully load
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Use html2canvas directly without modifying the element
    // html2canvas will handle overflow and rendering internally
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor,
      logging: false,
      // Let html2canvas handle dimensions automatically
      windowWidth: element.offsetWidth,
      windowHeight: element.offsetHeight,
      // Capture everything
      ignoreElements: (el: Element) => {
        // Don't ignore any elements
        return false;
      },
      timeout: 30000,
      // Better rendering
      foreignObjectRendering: false,
      // Handle images properly
      imageTimeout: 15000,
    } as any);
    
    // Convert canvas to PNG blob and download
    return new Promise((resolve, reject) => {
      try {
        canvas.toBlob(
          (blob) => {
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
              resolve();
            }, 100);
          },
          'image/png',
          1.0
        );
      } catch (error) {
        reject(error);
      }
    });
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