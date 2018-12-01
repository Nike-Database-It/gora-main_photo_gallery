import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 1000,
  duration: "30s"
};

export default function() {
  http.get("http://ec2-54-219-162-194.us-west-1.compute.amazonaws.com:3005");
  sleep(1);
};