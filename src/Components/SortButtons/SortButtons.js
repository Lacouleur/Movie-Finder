import React from 'react';
import Select from 'react-select';

const SortButtons = () => {
  const optAlpha = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const optType = [
    { value: 'Tous', label: 'Tous' },
    { value: 'Action', label: 'Action' },
    { value: 'Horreur', label: 'Horreur' },
    { value: 'Humour', label: 'Humour' },
  ];

  const optDate = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <>
      <Select options={optAlpha} />
      <Select options={optType} />
      <Select options={optDate} />
    </>
  );
};

export default SortButtons;


/* const SortContainer = styled.div`
width: 100%;
height : 300px;
background-color: pink;
z-index: 3;

`;

const AlphaSort = styled.div`
width : 100px;
height : 4em;
background-color: blue;
border-radius: 50px;
`;

const AlphaSortActive = styled(AlphaSort)`
width : 200px;
height : 6em;
background-color: blue;
border-radius: 50px;

`;

const TypeSort = styled.div`
width : 100px;
height : 4em;
background-color: greenyellow;
border-radius: 50px;
`;

const TypeSortActive = styled(TypeSort)`
width : 200px;
height : 6em;
background-color: greenyellow;
border-radius: 50px;
`;

const DateSort = styled.div`
width : 100px;
height : 4em;
background-color: purple;
border-radius: 50px;
`;

const DateSortActive = styled(DateSort)`
width : 200px;
height : 6em;
background-color: purple;
border-radius: 50px;
`;

const SortButtons = () => {
  const [isActiveAlpha, setIsActiveAlpha] = useState(false);
  const [isActiveType, setIsActiveType] = useState(false);
  const [isActiveDate, setIsActiveDate] = useState(false);


  return (
    <>
      <SortContainer>


        {isActiveType || <TypeSort onClick={() => setIsActiveType(!isActiveType)} />}
        {isActiveType && <TypeSortActive onClick={() => setIsActiveType(!isActiveType)} />}

        {isActiveAlpha || <AlphaSort onClick={() => setIsActiveAlpha(!isActiveAlpha)} />}
        {isActiveAlpha && <AlphaSortActive onClick={() => setIsActiveAlpha(!isActiveAlpha)} />}

        {isActiveDate || <DateSort onClick={() => setIsActiveDate(!isActiveDate)} />}
        {isActiveDate && <DateSortActive onClick={() => setIsActiveDate(!isActiveDate)} />}

      </SortContainer>
    </>
  );
};

export default SortButtons; */
