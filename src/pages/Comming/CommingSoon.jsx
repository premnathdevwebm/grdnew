import ComingSoon from "react-coming-soon";
import "bootstrap/dist/css/bootstrap.min.css";
function ComingSoon1() {
  return (
    <div className="container" style={{margin: 0, padding: 0}} >
      <div className="row">
        <div>
        <ComingSoon
          title="Our website is under construction, follow us for update soon!"
          subtitle="Coming Soon"
          image="https://goldenroycedesign.com/static/media/firstimage.4c15eb589e522965764b.png"
          textColor="#FFF"
          date="Mon Sep 11 2023 17:00:00 GMT-0600 (Mountain Daylight Time)"
        />
        </div>
      </div>
    </div>
  );
}

export default ComingSoon1;
