import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  category,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  category: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div
      className={clsx('absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label', {
        'lg:px-20 lg:pb-[35%]': position === 'center'
      })}
    >
      <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white gap-2">
        <h3 className=" line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{title}</h3>
        <Price
          className="flex-none rounded-full bg-green-500 p-2 text-white"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
        <div className='flex-none rounded-full bg-red-500 px-4 py-2 text-white'>{category}</div>
      </div>
    </div>
  );
};

export default Label;