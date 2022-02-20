import React, { useCallback } from "react";
import { throttle } from "lodash";

export default function useThrottle(timeout: number) {
  const throttleAction = useCallback(
    throttle((action: any) => {
      console.log(action);
      action();
    }, timeout),
    [timeout]
  );

  return { throttleAction };
}
