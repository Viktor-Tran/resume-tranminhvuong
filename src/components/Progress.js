import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  tmvWrapperProgress: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  labelProgress: {
    flex: 1,
  },
  tmvAreaProgress: {
    width: "90%",
  },
  tmvSkillProgress: {
    width: "100%",
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  tmvSkillProgress__done: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right,  #30cfd0, #330867)",
    boxShadow: "0 3px 3px -5px #30cfd0, 0 2px 5px #30cfd0",
    height: "100%",
    borderRadius: 20,
    transition: "1s ease 0.3s",
  },
}));
const Progress = ({ children, labelProgress }) => {
  const [widthState, setWidthState] = useState(0);
  const [opacityState, setOpacityState] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setWidthState((prev) => children);
      setOpacityState((prev) => 1);
    }, 200);

    return () => {
      clearInterval();
    };
  }, [children]);

  const classes = useStyle();
  return (
    <div className={classes.tmvWrapperProgress}>
      <h4 className={classes.labelProgress}>{labelProgress}</h4>
      <div className={classes.tmvAreaProgress}>
        <div className={classes.tmvSkillProgress}>
          <div
            className={classes.tmvSkillProgress__done}
            style={{ width: widthState, opacity: opacityState }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
