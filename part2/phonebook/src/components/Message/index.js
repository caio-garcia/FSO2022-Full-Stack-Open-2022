export function Message({ message, messageType }) {
  let messageStyle = "";
  if (messageType === "green") {
    messageStyle = {
      color: "green",
    };
  }

  return (
    <>
      <h1 styles={{ messageStyle }}>{message}</h1>
    </>
  );
}
