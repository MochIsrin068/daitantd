import { ChangeEvent, useMemo, useState } from "react";

type TPropsSecondTimer = {
  defaultTime?: number;
};

export default function SecondTimer({ defaultTime }: TPropsSecondTimer) {
  const [second, setSecond] = useState(defaultTime || 0);
  const [isStartTimer, setIsStartTimer] = useState(false);

  const secondTimerValue = useMemo(() => {
    if (isStartTimer) return second;
    return 0;
  }, [isStartTimer]);

  const buttonLabel = useMemo(() => {
    if (isStartTimer) return "Stop";
    return "Start";
  }, [isStartTimer]);

  const onChangeTimer = (event: ChangeEvent) => {
    event.preventDefault();

    const newSecondTimer: any = event?.target;
    setSecond(newSecondTimer?.value || 0);
  };

  const onTriggerTimer = () => setIsStartTimer(!isStartTimer);

  const classNameTriggerTimer = useMemo(
    () => (isStartTimer ? "countdown" : ""),
    [isStartTimer]
  );

  return (
    <>
      <div className="flex p-2">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content mr-3">
          {second === 0 && (
            <>
              <span className={`font-mono text-5xl`}>
                {/* @ts-ignore */}
                <span>0</span>
              </span>
              sec
            </>
          )}
          {second > 0 && secondTimerValue !== 0 && (
            <>
              <span className={`${classNameTriggerTimer} font-mono text-5xl`}>
                {/* @ts-ignore */}
                <span style={{ "--value": secondTimerValue }}></span>
              </span>
              sec
            </>
          )}
        </div>

        <div className="flex border border-dashed border-gray-400 rounded-box p-3">
          <input
            type="number"
            placeholder="Input number"
            className="input input-bordered input-primary w-full max-w-xs mr-2"
            value={second}
            onChange={onChangeTimer}
          />
          <button className="btn btn-primary" onClick={onTriggerTimer}>
            {buttonLabel} Timer
          </button>
        </div>
      </div>
    </>
  );
}
