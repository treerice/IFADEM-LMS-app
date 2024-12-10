import React from 'react';
import ReactPlayer from 'react-player';
import { Lock } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  isPremium: boolean;
  isUnlocked: boolean;
  thumbnail?: string;
  onUnlock?: () => void;
}

const VideoPlayer = ({ url, isPremium, isUnlocked, thumbnail, onUnlock }: VideoPlayerProps) => {
  if (isPremium && !isUnlocked) {
    return (
      <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
        {thumbnail && (
          <img
            src={thumbnail}
            alt="Video thumbnail"
            className="w-full h-full object-cover opacity-50"
          />
        )}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/60">
          <Lock className="w-12 h-12 text-cyan-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Premium Content</h3>
          <p className="text-gray-300 mb-4">Unlock this video by upgrading to premium</p>
          <button
            onClick={onUnlock}
            className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Upgrade Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls
        config={{
          youtube: {
            playerVars: { showinfo: 1 }
          }
        }}
      />
    </div>
  );
};

export default VideoPlayer;