import { Platform } from "react-native";
import { getUniqueId, getSystemName } from "react-native-device-info";

import moment from "moment";

const getDeviceId = async () => {
  return `${getSystemName().slice(0, 3)}-${(await getUniqueId())
    .replace(/-/g, "")
    .slice(0, 4)}`.toUpperCase();
};

export const log = async (type, message) => {
  let style = "\x1b[37m\x1b[1m";

  if (Platform.OS === "web") {
    if (type === "EROR") {
      style = "#f00";
    } else if (type === "REND") {
      style = "#0f0";
    } else if (type === "AUTH") {
      style = "#f0f";
    }
  } else {
    if (type === "EROR") {
      style = "\x1b[31m\x1b[1m";
    } else if (type === "REND") {
      style = "\x1b[36m\x1b[1m";
    } else if (type === "AUTH") {
      style = "\x1b[35m\x1b[1m";
    }
  }

  if (Platform.OS === "web") {
    console.log(
      `%c${await getDeviceId()} [${moment().format(
        "HH:mm:ss",
      )}] %c${type}%c ${message}`,
      "color: #888",
      `color: ${style}`,
      "color: #888",
    );
  } else {
    console.log(
      `\x1b[2m${await getDeviceId()} [${moment().format(
        "HH:mm:ss",
      )}] \x1b[0m${style}${type}\x1b[0m ${message}`,
    );
  }
};
