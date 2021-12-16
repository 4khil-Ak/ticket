import axios from "axios";
export default axios.create({
  baseURL:
    "https://api.ticketezy.com//event_managers/b774199413fabd8593a05c3f336efd08/events/application/json",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
