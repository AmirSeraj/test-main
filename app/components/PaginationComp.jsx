"use client"
import { Pagination, PaginationItemType } from "@nextui-org/pagination";
import { ChevronIcon } from "./Icons";
import clsx from "clsx";

const PaginationComp = () => {
    const renderItem = ({
        ref,
        key,
        value,
        isActive,
        onNext,
        onPrevious,
        setPage,
        className,
    }) => {
        if (value === PaginationItemType.NEXT) {
            return (
                <button key={key} className={clsx(className, "bg-default-200/50 min-w-8 w-8 h-8")} onClick={onNext}>
                    <ChevronIcon />
                </button>
            );
        }

        if (value === PaginationItemType.PREV) {
            return (
                <button key={key} className={clsx(className, "bg-default-200/50 min-w-8 w-8 h-8")} onClick={onPrevious}>
                    <ChevronIcon className="rotate-180" />
                </button>
            );
        }

        if (value === PaginationItemType.DOTS) {
            return <button key={key} className={className}>...</button>;
        }

        // cursor is the default item
        return (
            <button
                key={key}
                ref={ref}
                className={clsx(
                    className,
                    isActive &&
                    "text-white bg-gradient-to-br from-indigo-500 to-pink-500 font-bold",
                )}
                onClick={() => setPage(value)}
            >
                {value}
            </button>
        );
    };
    return (
        <Pagination
            disableCursorAnimation
            showControls
            total={10}
            initialPage={1}
            className="gap-2"
            radius="full"
            renderItem={renderItem}
            variant="light"
        />
    )
}

export default PaginationComp