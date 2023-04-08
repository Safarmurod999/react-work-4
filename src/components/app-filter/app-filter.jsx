import "./app-filter.css";
const AppFilter = ({updateFilterHandler,filter}) => {
  return <div className="btn-group mt-3">
    {btnsArr.map(el=>{
      return <button key={el.name} onClick={()=>updateFilterHandler(el.name)} className={`btn ${filter == el.name ?'btn-dark':'btn-outline-dark'}`}>{el.label}</button>
    })}
  </div>;
};

const btnsArr=[
  {name:'all',label:'Barcha kinolar'},
  {name:'popular',label:'Mashhur kinolar'},
  {name:'mostViewers',label:'Eng ko\'p ko\'rilgan kinolar'},
]

export default AppFilter;
