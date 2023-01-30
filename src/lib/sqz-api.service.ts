const apiBase: string = import.meta.env.VITE_SQZSVC_API;

interface GetShortCodeResponse {
  shortCode: string;
}

export const getShortCode = async (longUrl: string): Promise<string> => {
  try {
    const response = await fetch(`${apiBase}/api/short-code`, {
      method: "POST",
     // mode: "no-cors", // *cors, same-origin,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: longUrl }),
    });
    const result = await response.json();
    return result.shortCode;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
