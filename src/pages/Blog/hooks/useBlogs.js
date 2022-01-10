import { useEffect, useState } from "react";
import useGoogleSheets from "use-google-sheets";

export default function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  const { data, error } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
  });

  useEffect(() => {
    if (data && data[0] && data[0].data) {
      setBlogs(data[0].data.map((b) => b));
    }
  }, [data]);

  console.log({ blogs, error });
  return { blogs };
}
