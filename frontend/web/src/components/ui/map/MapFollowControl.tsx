import { c, classNames } from "@navtrack/shared/utils/tailwind";
import { useEffect, useState } from "react";
import { Icon } from "../icon/Icon";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { MapCenter } from "./MapCenter";
import { LatLongModel } from "@navtrack/shared/api/model/generated";
import { ZINDEX_MAP_CONTROL } from "../../../constants";
import { FormattedMessage } from "react-intl";

type MapFollowControlProps = {
  position?: LatLongModel;
  follow?: boolean;
  onChange?: (follow: boolean) => void;
};

export function MapFollowControl(props: MapFollowControlProps) {
  const [follow, setFollow] = useState(
    props.follow !== undefined ? props.follow : true
  );

  useEffect(() => {
    if (props.follow !== undefined && props.follow !== follow) {
      setFollow(props.follow);
    }
  }, [follow, props.follow]);

  return (
    <div
      className="absolute bottom-0 mx-auto flex w-full justify-center"
      style={{ zIndex: ZINDEX_MAP_CONTROL }}>
      <div
        onClick={() => {
          setFollow(!follow);
          props.onChange?.(!follow);
        }}
        className={classNames(
          "mb-2 cursor-pointer rounded-lg bg-white px-2 py-0.5 text-sm font-medium shadow-md hover:bg-gray-100",
          c(follow, "text-blue-600", "text-gray-500")
        )}>
        <Icon icon={faLocationArrow} className="mr-1" />
        <FormattedMessage
          id={follow ? "generic.follow-on" : "generic.follow-off"}
        />
      </div>
      {follow ? <MapCenter position={props.position} /> : null}
    </div>
  );
}
