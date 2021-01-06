import * as React from "react";
import { useState } from "react";

type Props = {
  firebaseConfig: string;
};

function AuthForm(props: Props) {
  return <div>Test {props.firebaseConfig} </div>;
}

export default AuthForm;
