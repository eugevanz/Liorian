import { useContext, useEffect, useState } from "react";
import { AppContext } from "../state";

function MenuHero() {
  const {isShowing, subjects, colors, activeTab, setTab, activeLessons, setLessons, setLes, showMenu} = useContext(AppContext);

  function onClickTab(label) {
    setTab(label);
    for (const subject of subjects) {
      if (label === subject.name) {
        setLessons(subject.lessons);
      }
    }
  }

  function onClickLes(lesson) {
    setLes([activeTab, lesson]);
    showMenu(false);
  }

  return isShowing ? <section className="hero is-medium">
    <div className="hero-body">
      <div className="tabs is-toggle">
        <ul>
          {subjects.map(item => <Tab activeTab={activeTab} onClickTab={onClickTab} lessons={item.lessons}>{item.name}</Tab>)}
        </ul>
      </div>
      <div className="buttons">
        {activeLessons.map(item => <button className={`button ${colors[item]} is-light is-large`} onClick={() => onClickLes(item)}>{item}</button>)}
      </div>
    </div>
  </section> : null;
}

function Tab({children, activeTab, onClickTab}) {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (activeTab === children) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [activeTab, children])

  return (<li className={isActive ? `is-active` : ""}>
    <a href="#tab" onClick={() => onClickTab(children)}>{children}</a>
  </li>);
}

export default MenuHero;