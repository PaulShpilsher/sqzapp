const apiBase: string = import.meta.env.VITE_SQZSVC_API;

interface GetShortCodeResponse {
    shortCode: string
}

export const getShortCode = async (longUrl: string): Promise<string> => {
  try {
    const response = await fetch(`${apiBase}/short-code`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: longUrl }),
    });
    const result = await response.json() as GetShortCodeResponse;
    return result.shortCode;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
