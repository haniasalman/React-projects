import './App.css';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

function App() {
  return (
    
      <div className="ui minimal comments">
        
        <ApprovalCard>
        <CommentDetail author="Mat"time="Yesterday at 1:00 AM"/>  {/* author is the property or attribute that is provided in the parent property */}
        </ApprovalCard>
        
       
       <ApprovalCard>
         {/* CommentDetail component is now a children of ApprovalCard Component and to show this component we will refer it as 
         props.children in the child component */}
       <CommentDetail author="Jane" time="Today at 4:10 am"/>
       </ApprovalCard>

       <ApprovalCard>
       <CommentDetail author="Sam" time="Today at 5:42PM"/>
       </ApprovalCard>
        
        <ApprovalCard>
        <CommentDetail author="Dami" time="Yesterday at 3:00 AM"/>
        </ApprovalCard>

        <ApprovalCard>
          <div>
            <h4>Warning!</h4>
            <p>Are you sure?</p>
          </div>
        </ApprovalCard>
        
      </div>
     
  );
}

export default App;
