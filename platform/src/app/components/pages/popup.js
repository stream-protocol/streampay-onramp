import Script from 'next/script';

function YourComponent() {
  return (
    <div>
      {/* Other component code */}
      
      <Script src="/pages/popup.js" strategy="afterInteractive" />
    </div>
  );
}

export default YourComponent;
