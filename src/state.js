import React, { useState } from "react";

export const AppContext = React.createContext();

export function StateManagement({children}) {
  const subjects = [
    {name: "Second Language", lessons: ["Listen & Speak", "Read & Write"]},
    {name: "English", lessons: ["Phonics & word building", "Read & Write"]},
    {name: "Life Skills", lessons: ["Improvision", "Physical Exercise", "Creative Arts"]},
    {name: "Mathematics", lessons: ["Counting", "Multiplication"]}
  ];
  const colors = {"Listen & Speak": "is-info", "Read & Write": "is-success", "Phonics & word building": "is-warning", "Improvision": "is-danger", "Physical Exercise": "is-info", "Creative Arts": "is-success", "Counting": "is-warning", "Multiplication": "is-danger"};
  const [isShowing, showMenu] = useState(false);
  const [activeTab, setTab] = useState(subjects[0].name);
  const [activeLessons, setLessons] = useState(subjects[0].lessons);
  const [activeLes, setLes] = useState([subjects[0].name, subjects[0].lessons[0]]);

  return (<AppContext.Provider value={{showMenu, isShowing, subjects, colors, activeTab, setTab, activeLessons, setLessons, activeLes, setLes}}>
    {children}
  </AppContext.Provider>);
}