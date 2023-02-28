import React from 'react'
import ContactsBlock from './ContactsBlock/ContactsBlock';
import DistanseWorkBlock from './DistanseWorkBlock/DistanseWorkBlock';
import GreettingBlock from './GreettingBlock/GreettingBlock';
import MySkillsBlock from './MySkillsBlock/MySkillsBlock';
import MyWorksBlock from './MyWorksBlock/MyWorksBlock';

const Main = () => {
  return (
    <div>
      <GreettingBlock />
      <MySkillsBlock />
      <MyWorksBlock />
      <DistanseWorkBlock />
      <ContactsBlock/>
    </div>
  );
}

export default Main