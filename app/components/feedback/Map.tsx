import React from "react";

interface Props {
  address: string;
}

const Map = ({ address }: Props) => {
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title="Google Map"
          width="100%"
          height="400"
          src={mapUrl}
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
