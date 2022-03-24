import { ClientError } from "graphql-request"
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
import { useFetchClient } from './useFetchClient';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: string;
};

export type AddChunkGoalEntryInput = {
  chunkNumber: Scalars['Float'];
  cycleId: Scalars['String'];
  entryTypeId: Scalars['Float'];
  entryValue: Scalars['String'];
};

export type ChunkDay = {
  __typename?: 'ChunkDay';
  id: Scalars['String'];
};

export type CreateCycleInput = {
  endDate: Scalars['Date'];
  name?: InputMaybe<Scalars['String']>;
  startDate: Scalars['Date'];
};

export type CreateEntryInput = {
  cycleId: Scalars['String'];
  entryDate: Scalars['DateTime'];
  weight: Scalars['String'];
};

export type Cycle = {
  __typename?: 'Cycle';
  active: Scalars['Boolean'];
  chunkLength: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  cycleChunks: Array<CycleChunk>;
  endDate: Scalars['Date'];
  id: Scalars['String'];
  name: Scalars['String'];
  startDate: Scalars['Date'];
  updatedAt: Scalars['DateTime'];
};

export type CycleChunk = {
  __typename?: 'CycleChunk';
  averageWeight: Scalars['String'];
  chunkDays: Array<ChunkDay>;
  /** Returns the weight difference compared to the previous chunk */
  compareWithPrevious: Scalars['String'];
  cycle: Cycle;
  endDate: Scalars['Date'];
  goalEntries: Array<ChunkDay>;
  id: Scalars['Float'];
  startDate: Scalars['Date'];
};

export type Entry = {
  __typename?: 'Entry';
  cycleChunk: Array<CycleChunk>;
  entryDate: Scalars['DateTime'];
  id: Scalars['String'];
  weight: Scalars['String'];
};

export type EntryType = {
  __typename?: 'EntryType';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type InDateRangeInput = {
  endDate: Scalars['Date'];
  startDate: Scalars['Date'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCycleChunkGoalEntry: CycleChunk;
  createCycle: Cycle;
  createEntry: Entry;
  /** Returns the id of the deleted entity */
  deleteEntry: Scalars['String'];
  toggleActiveCycle: Cycle;
  updateEntry: Entry;
};


export type MutationAddCycleChunkGoalEntryArgs = {
  addChunkGoalEntryInput: AddChunkGoalEntryInput;
};


export type MutationCreateCycleArgs = {
  createCycleInput: CreateCycleInput;
};


export type MutationCreateEntryArgs = {
  createEntryInput: CreateEntryInput;
};


export type MutationDeleteEntryArgs = {
  id: Scalars['String'];
};


export type MutationToggleActiveCycleArgs = {
  id: Scalars['String'];
  toggleActiveInput: ToggleActiveInput;
};


export type MutationUpdateEntryArgs = {
  id: Scalars['String'];
  updateEntryInput: UpdateEntryInput;
};

export type Query = {
  __typename?: 'Query';
  activeCycle?: Maybe<Cycle>;
  cycle: Cycle;
  cycleChunk: CycleChunk;
  cycleChunkInDateRange?: Maybe<CycleChunk>;
  cycleChunksForCycle: Array<CycleChunk>;
  cycles: Array<Cycle>;
  entries: Array<Entry>;
  entry: Entry;
  entryTypes: Array<EntryType>;
};


export type QueryCycleArgs = {
  id: Scalars['String'];
};


export type QueryCycleChunkArgs = {
  id: Scalars['String'];
};


export type QueryCycleChunkInDateRangeArgs = {
  cycleId: Scalars['String'];
  inDateRangeInput: InDateRangeInput;
};


export type QueryCycleChunksForCycleArgs = {
  id: Scalars['String'];
};


export type QueryEntryArgs = {
  id: Scalars['String'];
};

export type ToggleActiveInput = {
  active: Scalars['Boolean'];
};

export type UpdateEntryInput = {
  weight: Scalars['String'];
};

export type ChunkDateRangeFragment = { __typename?: 'CycleChunk', startDate: string, endDate: string };

export type PlainCycleFragment = { __typename?: 'Cycle', id: string, name: string, startDate: string, endDate: string, active: boolean, chunkLength: number };

export type CreateEntryMutationVariables = Exact<{
  input: CreateEntryInput;
}>;


export type CreateEntryMutation = { __typename?: 'Mutation', createEntry: { __typename?: 'Entry', id: string, weight: string } };

export type AddCycleChunkGoalEntryMutationVariables = Exact<{
  input: AddChunkGoalEntryInput;
}>;


export type AddCycleChunkGoalEntryMutation = { __typename?: 'Mutation', addCycleChunkGoalEntry: { __typename?: 'CycleChunk', id: number } };

export type CreateCycleMutationVariables = Exact<{
  input: CreateCycleInput;
}>;


export type CreateCycleMutation = { __typename?: 'Mutation', createCycle: { __typename?: 'Cycle', id: string } };

export type ToggleActiveCycleMutationVariables = Exact<{
  id: Scalars['String'];
  input: ToggleActiveInput;
}>;


export type ToggleActiveCycleMutation = { __typename?: 'Mutation', toggleActiveCycle: { __typename?: 'Cycle', id: string, name: string, startDate: string, endDate: string, active: boolean, chunkLength: number } };

export type AverageWeightOfChunkQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AverageWeightOfChunkQuery = { __typename?: 'Query', cycleChunk: { __typename?: 'CycleChunk', id: number, averageWeight: string, compareWithPrevious: string, cycle: { __typename?: 'Cycle', id: string } } };

export type CycleChunkInDateRangeQueryVariables = Exact<{
  cycleId: Scalars['String'];
  input: InDateRangeInput;
}>;


export type CycleChunkInDateRangeQuery = { __typename?: 'Query', cycleChunkInDateRange?: { __typename?: 'CycleChunk', id: number, compareWithPrevious: string, startDate: string, endDate: string } | null };

export type CycleChunksForCycleQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type CycleChunksForCycleQuery = { __typename?: 'Query', cycleChunksForCycle: Array<{ __typename?: 'CycleChunk', id: number, startDate: string, endDate: string, compareWithPrevious: string, averageWeight: string, cycle: { __typename?: 'Cycle', id: string, name: string, startDate: string, endDate: string, active: boolean, chunkLength: number } }> };

export type ActiveCycleQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveCycleQuery = { __typename?: 'Query', activeCycle?: { __typename?: 'Cycle', id: string, name: string, startDate: string, endDate: string, active: boolean, chunkLength: number } | null };

export type CycleQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type CycleQuery = { __typename?: 'Query', cycle: { __typename?: 'Cycle', id: string, name: string, startDate: string, endDate: string, active: boolean, chunkLength: number, cycleChunks: Array<{ __typename?: 'CycleChunk', id: number, startDate: string, endDate: string }> } };

export type CyclesQueryVariables = Exact<{ [key: string]: never; }>;


export type CyclesQuery = { __typename?: 'Query', cycles: Array<{ __typename?: 'Cycle', id: string, name: string, startDate: string, endDate: string, active: boolean, chunkLength: number }> };

export type EntryTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type EntryTypesQuery = { __typename?: 'Query', entryTypes: Array<{ __typename?: 'EntryType', id: number, type: string }> };

export const ChunkDateRangeFragmentDoc = `
    fragment ChunkDateRange on CycleChunk {
  startDate
  endDate
}
    `;
export const PlainCycleFragmentDoc = `
    fragment PlainCycle on Cycle {
  id
  name
  startDate
  endDate
  active
  chunkLength
}
    `;
export const CreateEntryDocument = `
    mutation createEntry($input: CreateEntryInput!) {
  createEntry(createEntryInput: $input) {
    id
    weight
  }
}
    `;
export const useCreateEntryMutation = <
      TError = ClientError,
      TContext = unknown
    >(options?: UseMutationOptions<CreateEntryMutation, TError, CreateEntryMutationVariables, TContext>) =>
    useMutation<CreateEntryMutation, TError, CreateEntryMutationVariables, TContext>(
      ['createEntry'],
      useFetchClient<CreateEntryMutation, CreateEntryMutationVariables>(CreateEntryDocument),
      options
    );
export const AddCycleChunkGoalEntryDocument = `
    mutation addCycleChunkGoalEntry($input: AddChunkGoalEntryInput!) {
  addCycleChunkGoalEntry(addChunkGoalEntryInput: $input) {
    id
  }
}
    `;
export const useAddCycleChunkGoalEntryMutation = <
      TError = ClientError,
      TContext = unknown
    >(options?: UseMutationOptions<AddCycleChunkGoalEntryMutation, TError, AddCycleChunkGoalEntryMutationVariables, TContext>) =>
    useMutation<AddCycleChunkGoalEntryMutation, TError, AddCycleChunkGoalEntryMutationVariables, TContext>(
      ['addCycleChunkGoalEntry'],
      useFetchClient<AddCycleChunkGoalEntryMutation, AddCycleChunkGoalEntryMutationVariables>(AddCycleChunkGoalEntryDocument),
      options
    );
export const CreateCycleDocument = `
    mutation createCycle($input: CreateCycleInput!) {
  createCycle(createCycleInput: $input) {
    id
  }
}
    `;
export const useCreateCycleMutation = <
      TError = ClientError,
      TContext = unknown
    >(options?: UseMutationOptions<CreateCycleMutation, TError, CreateCycleMutationVariables, TContext>) =>
    useMutation<CreateCycleMutation, TError, CreateCycleMutationVariables, TContext>(
      ['createCycle'],
      useFetchClient<CreateCycleMutation, CreateCycleMutationVariables>(CreateCycleDocument),
      options
    );
export const ToggleActiveCycleDocument = `
    mutation toggleActiveCycle($id: String!, $input: ToggleActiveInput!) {
  toggleActiveCycle(id: $id, toggleActiveInput: $input) {
    ...PlainCycle
  }
}
    ${PlainCycleFragmentDoc}`;
export const useToggleActiveCycleMutation = <
      TError = ClientError,
      TContext = unknown
    >(options?: UseMutationOptions<ToggleActiveCycleMutation, TError, ToggleActiveCycleMutationVariables, TContext>) =>
    useMutation<ToggleActiveCycleMutation, TError, ToggleActiveCycleMutationVariables, TContext>(
      ['toggleActiveCycle'],
      useFetchClient<ToggleActiveCycleMutation, ToggleActiveCycleMutationVariables>(ToggleActiveCycleDocument),
      options
    );
export const AverageWeightOfChunkDocument = `
    query averageWeightOfChunk($id: String!) {
  cycleChunk(id: $id) {
    id
    averageWeight
    cycle {
      id
    }
    compareWithPrevious
  }
}
    `;
export const useAverageWeightOfChunkQuery = <
      TData = AverageWeightOfChunkQuery,
      TError = ClientError
    >(
      variables: AverageWeightOfChunkQueryVariables,
      options?: UseQueryOptions<AverageWeightOfChunkQuery, TError, TData>
    ) =>
    useQuery<AverageWeightOfChunkQuery, TError, TData>(
      ['averageWeightOfChunk', variables],
      useFetchClient<AverageWeightOfChunkQuery, AverageWeightOfChunkQueryVariables>(AverageWeightOfChunkDocument).bind(null, variables),
      options
    );

useAverageWeightOfChunkQuery.getKey = (variables: AverageWeightOfChunkQueryVariables) => ['averageWeightOfChunk', variables];
;

export const CycleChunkInDateRangeDocument = `
    query cycleChunkInDateRange($cycleId: String!, $input: InDateRangeInput!) {
  cycleChunkInDateRange(cycleId: $cycleId, inDateRangeInput: $input) {
    id
    compareWithPrevious
    ...ChunkDateRange
  }
}
    ${ChunkDateRangeFragmentDoc}`;
export const useCycleChunkInDateRangeQuery = <
      TData = CycleChunkInDateRangeQuery,
      TError = ClientError
    >(
      variables: CycleChunkInDateRangeQueryVariables,
      options?: UseQueryOptions<CycleChunkInDateRangeQuery, TError, TData>
    ) =>
    useQuery<CycleChunkInDateRangeQuery, TError, TData>(
      ['cycleChunkInDateRange', variables],
      useFetchClient<CycleChunkInDateRangeQuery, CycleChunkInDateRangeQueryVariables>(CycleChunkInDateRangeDocument).bind(null, variables),
      options
    );

useCycleChunkInDateRangeQuery.getKey = (variables: CycleChunkInDateRangeQueryVariables) => ['cycleChunkInDateRange', variables];
;

export const CycleChunksForCycleDocument = `
    query cycleChunksForCycle($id: String!) {
  cycleChunksForCycle(id: $id) {
    id
    startDate
    endDate
    compareWithPrevious
    averageWeight
    cycle {
      ...PlainCycle
    }
  }
}
    ${PlainCycleFragmentDoc}`;
export const useCycleChunksForCycleQuery = <
      TData = CycleChunksForCycleQuery,
      TError = ClientError
    >(
      variables: CycleChunksForCycleQueryVariables,
      options?: UseQueryOptions<CycleChunksForCycleQuery, TError, TData>
    ) =>
    useQuery<CycleChunksForCycleQuery, TError, TData>(
      ['cycleChunksForCycle', variables],
      useFetchClient<CycleChunksForCycleQuery, CycleChunksForCycleQueryVariables>(CycleChunksForCycleDocument).bind(null, variables),
      options
    );

useCycleChunksForCycleQuery.getKey = (variables: CycleChunksForCycleQueryVariables) => ['cycleChunksForCycle', variables];
;

export const ActiveCycleDocument = `
    query activeCycle {
  activeCycle {
    ...PlainCycle
  }
}
    ${PlainCycleFragmentDoc}`;
export const useActiveCycleQuery = <
      TData = ActiveCycleQuery,
      TError = ClientError
    >(
      variables?: ActiveCycleQueryVariables,
      options?: UseQueryOptions<ActiveCycleQuery, TError, TData>
    ) =>
    useQuery<ActiveCycleQuery, TError, TData>(
      variables === undefined ? ['activeCycle'] : ['activeCycle', variables],
      useFetchClient<ActiveCycleQuery, ActiveCycleQueryVariables>(ActiveCycleDocument).bind(null, variables),
      options
    );

useActiveCycleQuery.getKey = (variables?: ActiveCycleQueryVariables) => variables === undefined ? ['activeCycle'] : ['activeCycle', variables];
;

export const CycleDocument = `
    query cycle($id: String!) {
  cycle(id: $id) {
    ...PlainCycle
    cycleChunks {
      id
      startDate
      endDate
    }
  }
}
    ${PlainCycleFragmentDoc}`;
export const useCycleQuery = <
      TData = CycleQuery,
      TError = ClientError
    >(
      variables: CycleQueryVariables,
      options?: UseQueryOptions<CycleQuery, TError, TData>
    ) =>
    useQuery<CycleQuery, TError, TData>(
      ['cycle', variables],
      useFetchClient<CycleQuery, CycleQueryVariables>(CycleDocument).bind(null, variables),
      options
    );

useCycleQuery.getKey = (variables: CycleQueryVariables) => ['cycle', variables];
;

export const CyclesDocument = `
    query cycles {
  cycles {
    ...PlainCycle
  }
}
    ${PlainCycleFragmentDoc}`;
export const useCyclesQuery = <
      TData = CyclesQuery,
      TError = ClientError
    >(
      variables?: CyclesQueryVariables,
      options?: UseQueryOptions<CyclesQuery, TError, TData>
    ) =>
    useQuery<CyclesQuery, TError, TData>(
      variables === undefined ? ['cycles'] : ['cycles', variables],
      useFetchClient<CyclesQuery, CyclesQueryVariables>(CyclesDocument).bind(null, variables),
      options
    );

useCyclesQuery.getKey = (variables?: CyclesQueryVariables) => variables === undefined ? ['cycles'] : ['cycles', variables];
;

export const EntryTypesDocument = `
    query entryTypes {
  entryTypes {
    id
    type
  }
}
    `;
export const useEntryTypesQuery = <
      TData = EntryTypesQuery,
      TError = ClientError
    >(
      variables?: EntryTypesQueryVariables,
      options?: UseQueryOptions<EntryTypesQuery, TError, TData>
    ) =>
    useQuery<EntryTypesQuery, TError, TData>(
      variables === undefined ? ['entryTypes'] : ['entryTypes', variables],
      useFetchClient<EntryTypesQuery, EntryTypesQueryVariables>(EntryTypesDocument).bind(null, variables),
      options
    );

useEntryTypesQuery.getKey = (variables?: EntryTypesQueryVariables) => variables === undefined ? ['entryTypes'] : ['entryTypes', variables];
;
