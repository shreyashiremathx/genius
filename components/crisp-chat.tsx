"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f9559ecd-deed-4704-8834-fd1369f41065");
  }, []);

  return null;
};
