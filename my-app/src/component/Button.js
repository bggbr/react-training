import cn from 'classnames';

export default function Button({ className, disabled, ...rest }) {
    return (
        <button
            className={cn('rounded-md py-2 px-3 font-semibold leading-5 text-white', disabled ? 'bg-slate-400 hover:bg-slate-400' : 'bg-indigo-600 hover:bg-indigo-500', className)}
            disabled={disabled}
            {...rest}
        />
    );
}
