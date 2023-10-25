import css from "./Pages.module.css";

const DummyTable = () => {
  return (
	<div className={css.container}>
		<table>
      <thead>
        <tr>
          <td>Dummy</td>
          <td>Table</td>
        </tr>
      </thead>
    </table>

	</div>
    
  );
};

export default DummyTable;
