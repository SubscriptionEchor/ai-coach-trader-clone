
import React from 'react';
import { NetworkNode } from './NetworkNode';
import { NetworkConnector } from './NetworkConnector';
import { cn } from '../../../lib/utils';

interface NetworkTreeProps {
  data: {
    referrer: any;
    currentUser: any;
    levels: any[];
  };
}

export function NetworkTree({ data }: NetworkTreeProps) {
  return (
    <div className="space-y-8"> {/* Reduced vertical spacing */}
      {/* Referrer */}
      <div className="flex justify-center">
        <NetworkNode
          user={data.referrer}
          variant="referrer"
        />
      </div>
      <NetworkConnector from="referrer" to="user" />

      {/* Current User */}
      <div className="flex justify-center">
        <NetworkNode
          user={data.currentUser}
          variant="user"
        />
      </div>
      <NetworkConnector from="user" to="level1" />

      {/* Network Levels */}
      {data.levels.map((level, index) => (
        <div key={level.level} className="space-y-8"> {/* Reduced vertical spacing */}
          <div className="flex flex-wrap justify-center gap-4"> {/* Reduced gap */}
            {/* Show top 3 users if available */}
            {level.users?.slice(0, 3).map((user: any, userIndex: number) => (
              <NetworkNode
                key={userIndex}
                user={user}
                variant={`level${level.level}`}
              />
            ))}

            {/* Show summary node if no users or has more users */}
            {(!level.users || level.totalUsers > (level.users?.length || 0)) && (
              <NetworkNode
                summary={{
                  level: level.level,
                  totalUsers: level.totalUsers,
                  totalEarnings: level.totalEarnings
                }}
                variant="summary"
              />
            )}
          </div>

          {/* Add connector if not last level */}
          {index < data.levels.length - 1 && (
            <NetworkConnector 
              from={`level${level.level}`} 
              to={`level${level.level + 1}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
