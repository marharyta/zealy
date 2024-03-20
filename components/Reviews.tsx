"use client";
import { useState } from "react";
import { useRef } from "react";

import { Review } from "@/lib/types";
import { useStore, useAtomValue, useSetAtom, useAtom } from "jotai";
import { Toggle } from "@/components/ui/toggle";
import { reviewsAtom } from "@/lib/store/atoms";
import { Input } from "@/components/ui/input";

import Picker from "emoji-picker-react";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  const [value, setValue] = useAtom(reviewsAtom);
  const store = useStore();

  const loaded = useRef(false);
  if (!loaded.current) {
    store.set(reviewsAtom, reviews);
    loaded.current = true;
  }

  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [chosenEmoji, setChosenEmoji] = useState("🥳");
  const [showEmojis, setShowEmojis] = useState(false);

  return (
    <>
      {value?.map((review, index) => (
        <div key={index} className="p-5">
          <div className="mt-1 text-lg leading-5 text-gray-300 font-light italic grid grid-cols-1 divide-y rounded bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5">
            <p className="">{review.text}</p>
            <div className="py-1">{review.emoji}</div>
          </div>
        </div>
      ))}
      <form
        onSubmit={async (evt) => {
          evt.preventDefault();
          setValue([
            ...value,
            { text: reviewText, rating: reviewRating, emoji: chosenEmoji },
          ]);

          // TODO: add to server state
          // await addReviewAction(reviewText, reviewRating);

          setReviewText("");
          setReviewRating(5);
        }}
      >
        <div className="">
          <div className="flex w-full">
            <span className="inline-flex items-center  text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <Toggle
                className="w-full h-full"
                variant="outline"
                aria-label="Toggle italic"
                onClick={(e: any) => {
                  setShowEmojis(!showEmojis);
                }}
              >
                {chosenEmoji ?? (
                  <span
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                  >
                    🥳
                  </span>
                )}
              </Toggle>
            </span>

            <Input
              type="text"
              placeholder="add a review"
              className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="review-text"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
          </div>
          <Picker
            className="w-full my-3 h-10"
            reactionsDefaultOpen={showEmojis}
            open={showEmojis}
            onReactionClick={(emojiData: any, event: MouseEvent) => {
              setChosenEmoji(emojiData.emoji);
              setReviewText((prev) => prev + emojiData.emoji);
            }}
            onEmojiClick={(emojiData: any, event: MouseEvent) => {
              setChosenEmoji(emojiData.emoji);
              setReviewText((prev) => prev + emojiData.emoji);
            }}
          />
        </div>
        <div className="flex justify-end hidden">
          <button
            disabled={!reviewText}
            className="mt-6 px-8 py-2 text-lg font-bold text-white bg-blue-800 rounded-lg disabled:bg-gray-500 disabled:cursor-not-allowed"
            onClick={async () => {}}
          >
            Submit Review
          </button>
        </div>
      </form>
    </>
  );
}
