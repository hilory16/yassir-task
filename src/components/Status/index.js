import styled from "styled-components";

export const Status = styled.div`
  background-color: ${({ status }) => {
    switch (status) {
      case "confirmed":
      case "accepted":
        return "#EAFBF1";

      case "rejected":
      case "not confirmed":
        return "#FCE9E9";

      case "checked out":
        return "#e3f0fd";

      case "seated":
        return "#fcebdb";

      default:
        return "#00a3ff";
    }
  }};
  color: ${({ status }) => {
    switch (status) {
      case "confirmed":
      case "accepted":
        return "#41D87D";

      case "rejected":
      case "not confirmed":
        return "#E43535";

      case "checked out":
        return "#1354d2";

      case "seated":
        return "#F08829";

      default:
        return "#fff";
    }
  }};

  padding: 0.5rem;
  border-radius: 0.25rem;
  text-transform: capitalize;
  white-space: nowrap;
  max-height: 1.875rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 0.75rem;
  text-transform: capitalize;
`;
