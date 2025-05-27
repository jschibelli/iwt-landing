interface ZohoTokenResponse {
  access_token: string;
  api_domain: string;
  token_type: string;
  expires_in: number;
}

export interface ZohoCredentials {
  access_token: string;
  api_domain: string;
}

export async function getZohoAccessToken(): Promise<ZohoCredentials> {
  const {
    ZC_REFRESH_TOKEN,
    ZC_CLIENT_ID,
    ZC_CLIENT_SECRET,
    ZC_REDIRECT_URI
  } = process.env;

  if (!ZC_REFRESH_TOKEN || !ZC_CLIENT_ID || !ZC_CLIENT_SECRET || !ZC_REDIRECT_URI) {
    throw new Error('Missing required Zoho CRM environment variables');
  }

  const params = new URLSearchParams({
    refresh_token: ZC_REFRESH_TOKEN,
    client_id: ZC_CLIENT_ID,
    client_secret: ZC_CLIENT_SECRET,
    redirect_uri: ZC_REDIRECT_URI,
    grant_type: 'refresh_token'
  });

  const response = await fetch('https://accounts.zoho.com/oauth/v2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params.toString()
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to get Zoho access token: ${error}`);
  }

  const data: ZohoTokenResponse = await response.json();
  console.log('Zoho token response:', data);

  // Fallback to global domain if api_domain is missing
  const apiDomain = data.api_domain || "https://www.zohoapis.com";

  return {
    access_token: data.access_token,
    api_domain: apiDomain
  };
} 