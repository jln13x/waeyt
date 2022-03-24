import { ActiveChunkProps } from '.';
import { ChunkContentWrapper } from '../ChunkContentWrapper';
import { ChunkDate } from '../ChunkDate';

export const ActiveChunkWrapper: React.FC<ActiveChunkProps> = ({ children, ...props }) => {
  const { dateRange, chunkNumber } = props;

  return (
    <div className="relative h-24 w-full rounded-3xl bg-background-800 px-6 text-white shadow-lg shadow-background-900">
      <ChunkContentWrapper {...props}>
        <ChunkDate dateRange={dateRange} chunkNumber={chunkNumber} variant="active" />
        {children}
      </ChunkContentWrapper>
    </div>
  );
};
