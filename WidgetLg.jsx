import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Submissions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Contributors</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Category</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Christopher Caldwell</span>
          </td>
          <td className="widgetLgDate">May 19, 2022</td>
          <td className="widgetLgAmount">Battery Technology</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Patricia Simmon</span>
          </td>
          <td className="widgetLgDate">May 4, 2022</td>
          <td className="widgetLgAmount">General Tchnology</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?cs=srgb&dl=pexels-mentatdgt-937481.jpg&fm=jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">James Smith</span>
          </td>
          <td className="widgetLgDate">March 10, 2022</td>
          <td className="widgetLgAmount">Battery Technology</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/3201696/pexels-photo-3201696.jpeg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Maria Rodriguez</span>
          </td>
          <td className="widgetLgDate">April 14, 2022</td>
          <td className="widgetLgAmount">General Technology</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}