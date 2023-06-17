interface data {
  bgcolor: string;
  completed: number;
}

const ProgressBar = (props: data) => {
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };
  return (
    <div style={containerStyles}>
      <div
        style={{
          borderRadius: "inherit",

          height: "100%",
          width: `${props.completed}%`,
          backgroundColor: `${props.bgcolor}`,
        }}
      >
        <span style={labelStyles}>{`${props.completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
