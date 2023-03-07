const Paragraph = (props) => {
  return (
    <div>
      <input type="text" placeholder="введите текст" onChange={props.inpData} />
      <button onClick={() => props.saveAdd()}>добавить параграфф</button>
    </div>
  );
};

export default Paragraph;
