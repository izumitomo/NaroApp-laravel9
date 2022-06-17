import ReactLoading from "react-loading";
import { styled } from "@mui/system";

const LoadingStyle = styled("div")({
  textAlign: "center",
  fontFamily: "pixel10-b",
  color: "black",
  fontSize: 60,
  whiteSpace: "nowrap",
});

export default function Loading() {
  return (
    <LoadingStyle>
      Loading...
      <ReactLoading
        type="bars"
        color="black"
        height="100px"
        width="100px"
        className="mx-auto"
      />
    </LoadingStyle>
  );
}
