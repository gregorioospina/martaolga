import { useEffect, useState } from "react";
import useGoogleSheets from "use-google-sheets";

export default function useBlogs() {
  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
  });

  console.log({ data, error });
  return { data };
}
