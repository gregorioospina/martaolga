import { useEffect, useState } from "react";
import useGoogleSheets from "use-google-sheets";

export default function useExperiences() {
  const [experiences, setExperiences] = useState([]);

  const { data, error } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
    sheetsNames: ["Experiencia"],
  });

  useEffect(() => {
    if (data && data[0] && data[0].data) {
      setExperiences(data[0].data.map((b) => b));
    }
  }, [data]);

  return { experiences };
}
