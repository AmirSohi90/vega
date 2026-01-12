type AlertBoxProps = {
  alertMessage: string;
};

function AlertBox({ alertMessage }: AlertBoxProps) {
  return (
    <div
      className="mt-2 bg-red-500 text-sm text-white rounded-lg p-4"
      role="alert"
      aria-labelledby="hs-solid-color-danger-label"
    >
      {alertMessage}
    </div>
  );
}

export { AlertBox };
