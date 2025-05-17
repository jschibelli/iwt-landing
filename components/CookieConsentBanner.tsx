import CookieConsent from 'react-cookie-consent';

export function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="intraweb_cookie_consent"
      style={{ background: "#222" }}
      buttonStyle={{ color: "#fff", background: "#2563eb", borderRadius: "4px" }}
      expires={365}
    >
      This website uses cookies to enhance the user experience.{" "}
      <a href="/privacy-policy" className="underline">Learn more</a>.
    </CookieConsent>
  );
} 