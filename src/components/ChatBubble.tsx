import React from 'react';
import { motion } from 'framer-motion';
import { useChatBubble } from '../providers/ChatBubbleProvider';
import { Message } from '../types';

interface ChatBubbleProps {
  message: Message;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const { colors, textSize, maxBubbleWidth, fontFamily } = useChatBubble();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        height: 0,
        marginBottom: 0,
        transition: {
          opacity: { duration: 0.2 },
          height: { duration: 0.3, delay: 0.1 },
          marginBottom: { duration: 0.3, delay: 0.1 }
        }
      }}
      transition={{ duration: 0.3 }}
      layout
      className="flex items-end justify-start w-full gap-2"
    >
      {/* User Icon */}
      <motion.img
        src="/icon2.png"
        alt="User"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-8 h-8 rounded-full object-cover"
      />

      {/* Message Bubble */}
      <div
        className="inline-block px-4 py-2 rounded-3xl rounded-bl-lg"
        style={{
          backgroundColor: colors.bubbleColor,
          maxWidth: `${maxBubbleWidth}px`
        }}
      >
        <p
          className="break-words whitespace-pre-wrap"
          style={{
            color: colors.textColor,
            fontSize: `${textSize}px`,
            fontFamily: fontFamily
          }}
        >
          {message.text}
        </p>
      </div>
    </motion.div>
  );
};
