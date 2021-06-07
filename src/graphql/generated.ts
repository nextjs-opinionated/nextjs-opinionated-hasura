/* generated code */
import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  timestamptz: any
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>
  _gt?: Maybe<Scalars['Int']>
  _gte?: Maybe<Scalars['Int']>
  _in?: Maybe<Array<Scalars['Int']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Int']>
  _lte?: Maybe<Scalars['Int']>
  _neq?: Maybe<Scalars['Int']>
  _nin?: Maybe<Array<Scalars['Int']>>
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  _nlike?: Maybe<Scalars['String']>
  _nsimilar?: Maybe<Scalars['String']>
  _similar?: Maybe<Scalars['String']>
}

/** columns and relationships of "message_tag" */
export type Message_Tag = {
  __typename?: 'message_tag'
  /** An object relationship */
  message: Messages
  message_id: Scalars['Int']
  /** An object relationship */
  tag: Tags
  tag_id: Scalars['Int']
}

/** aggregated selection of "message_tag" */
export type Message_Tag_Aggregate = {
  __typename?: 'message_tag_aggregate'
  aggregate?: Maybe<Message_Tag_Aggregate_Fields>
  nodes: Array<Message_Tag>
}

/** aggregate fields of "message_tag" */
export type Message_Tag_Aggregate_Fields = {
  __typename?: 'message_tag_aggregate_fields'
  avg?: Maybe<Message_Tag_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Message_Tag_Max_Fields>
  min?: Maybe<Message_Tag_Min_Fields>
  stddev?: Maybe<Message_Tag_Stddev_Fields>
  stddev_pop?: Maybe<Message_Tag_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Message_Tag_Stddev_Samp_Fields>
  sum?: Maybe<Message_Tag_Sum_Fields>
  var_pop?: Maybe<Message_Tag_Var_Pop_Fields>
  var_samp?: Maybe<Message_Tag_Var_Samp_Fields>
  variance?: Maybe<Message_Tag_Variance_Fields>
}

/** aggregate fields of "message_tag" */
export type Message_Tag_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Message_Tag_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "message_tag" */
export type Message_Tag_Aggregate_Order_By = {
  avg?: Maybe<Message_Tag_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Message_Tag_Max_Order_By>
  min?: Maybe<Message_Tag_Min_Order_By>
  stddev?: Maybe<Message_Tag_Stddev_Order_By>
  stddev_pop?: Maybe<Message_Tag_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Message_Tag_Stddev_Samp_Order_By>
  sum?: Maybe<Message_Tag_Sum_Order_By>
  var_pop?: Maybe<Message_Tag_Var_Pop_Order_By>
  var_samp?: Maybe<Message_Tag_Var_Samp_Order_By>
  variance?: Maybe<Message_Tag_Variance_Order_By>
}

/** input type for inserting array relation for remote table "message_tag" */
export type Message_Tag_Arr_Rel_Insert_Input = {
  data: Array<Message_Tag_Insert_Input>
  on_conflict?: Maybe<Message_Tag_On_Conflict>
}

/** aggregate avg on columns */
export type Message_Tag_Avg_Fields = {
  __typename?: 'message_tag_avg_fields'
  message_id?: Maybe<Scalars['Float']>
  tag_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "message_tag" */
export type Message_Tag_Avg_Order_By = {
  message_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "message_tag". All fields are combined with a logical 'AND'. */
export type Message_Tag_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Message_Tag_Bool_Exp>>>
  _not?: Maybe<Message_Tag_Bool_Exp>
  _or?: Maybe<Array<Maybe<Message_Tag_Bool_Exp>>>
  message?: Maybe<Messages_Bool_Exp>
  message_id?: Maybe<Int_Comparison_Exp>
  tag?: Maybe<Tags_Bool_Exp>
  tag_id?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "message_tag" */
export enum Message_Tag_Constraint {
  /** unique or primary key constraint */
  MessageTagPkey = 'message_tag_pkey',
}

/** input type for incrementing integer column in table "message_tag" */
export type Message_Tag_Inc_Input = {
  message_id?: Maybe<Scalars['Int']>
  tag_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "message_tag" */
export type Message_Tag_Insert_Input = {
  message?: Maybe<Messages_Obj_Rel_Insert_Input>
  message_id?: Maybe<Scalars['Int']>
  tag?: Maybe<Tags_Obj_Rel_Insert_Input>
  tag_id?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Message_Tag_Max_Fields = {
  __typename?: 'message_tag_max_fields'
  message_id?: Maybe<Scalars['Int']>
  tag_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "message_tag" */
export type Message_Tag_Max_Order_By = {
  message_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Message_Tag_Min_Fields = {
  __typename?: 'message_tag_min_fields'
  message_id?: Maybe<Scalars['Int']>
  tag_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "message_tag" */
export type Message_Tag_Min_Order_By = {
  message_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** response of any mutation on the table "message_tag" */
export type Message_Tag_Mutation_Response = {
  __typename?: 'message_tag_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Message_Tag>
}

/** input type for inserting object relation for remote table "message_tag" */
export type Message_Tag_Obj_Rel_Insert_Input = {
  data: Message_Tag_Insert_Input
  on_conflict?: Maybe<Message_Tag_On_Conflict>
}

/** on conflict condition type for table "message_tag" */
export type Message_Tag_On_Conflict = {
  constraint: Message_Tag_Constraint
  update_columns: Array<Message_Tag_Update_Column>
  where?: Maybe<Message_Tag_Bool_Exp>
}

/** ordering options when selecting data from "message_tag" */
export type Message_Tag_Order_By = {
  message?: Maybe<Messages_Order_By>
  message_id?: Maybe<Order_By>
  tag?: Maybe<Tags_Order_By>
  tag_id?: Maybe<Order_By>
}

/** primary key columns input for table: "message_tag" */
export type Message_Tag_Pk_Columns_Input = {
  message_id: Scalars['Int']
  tag_id: Scalars['Int']
}

/** select columns of table "message_tag" */
export enum Message_Tag_Select_Column {
  /** column name */
  MessageId = 'message_id',
  /** column name */
  TagId = 'tag_id',
}

/** input type for updating data in table "message_tag" */
export type Message_Tag_Set_Input = {
  message_id?: Maybe<Scalars['Int']>
  tag_id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Message_Tag_Stddev_Fields = {
  __typename?: 'message_tag_stddev_fields'
  message_id?: Maybe<Scalars['Float']>
  tag_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "message_tag" */
export type Message_Tag_Stddev_Order_By = {
  message_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Message_Tag_Stddev_Pop_Fields = {
  __typename?: 'message_tag_stddev_pop_fields'
  message_id?: Maybe<Scalars['Float']>
  tag_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "message_tag" */
export type Message_Tag_Stddev_Pop_Order_By = {
  message_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Message_Tag_Stddev_Samp_Fields = {
  __typename?: 'message_tag_stddev_samp_fields'
  message_id?: Maybe<Scalars['Float']>
  tag_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "message_tag" */
export type Message_Tag_Stddev_Samp_Order_By = {
  message_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Message_Tag_Sum_Fields = {
  __typename?: 'message_tag_sum_fields'
  message_id?: Maybe<Scalars['Int']>
  tag_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "message_tag" */
export type Message_Tag_Sum_Order_By = {
  message_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** update columns of table "message_tag" */
export enum Message_Tag_Update_Column {
  /** column name */
  MessageId = 'message_id',
  /** column name */
  TagId = 'tag_id',
}

/** aggregate var_pop on columns */
export type Message_Tag_Var_Pop_Fields = {
  __typename?: 'message_tag_var_pop_fields'
  message_id?: Maybe<Scalars['Float']>
  tag_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "message_tag" */
export type Message_Tag_Var_Pop_Order_By = {
  message_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Message_Tag_Var_Samp_Fields = {
  __typename?: 'message_tag_var_samp_fields'
  message_id?: Maybe<Scalars['Float']>
  tag_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "message_tag" */
export type Message_Tag_Var_Samp_Order_By = {
  message_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Message_Tag_Variance_Fields = {
  __typename?: 'message_tag_variance_fields'
  message_id?: Maybe<Scalars['Float']>
  tag_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "message_tag" */
export type Message_Tag_Variance_Order_By = {
  message_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** columns and relationships of "messages" */
export type Messages = {
  __typename?: 'messages'
  body: Scalars['String']
  created_at: Scalars['timestamptz']
  id: Scalars['Int']
  imageUrl?: Maybe<Scalars['String']>
  /** An array relationship */
  message_tags: Array<Message_Tag>
  /** An aggregated array relationship */
  message_tags_aggregate: Message_Tag_Aggregate
  publishedAt?: Maybe<Scalars['timestamptz']>
  title?: Maybe<Scalars['String']>
  updated_at: Scalars['timestamptz']
  url?: Maybe<Scalars['String']>
}

/** columns and relationships of "messages" */
export type MessagesMessage_TagsArgs = {
  distinct_on?: Maybe<Array<Message_Tag_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Message_Tag_Order_By>>
  where?: Maybe<Message_Tag_Bool_Exp>
}

/** columns and relationships of "messages" */
export type MessagesMessage_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Message_Tag_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Message_Tag_Order_By>>
  where?: Maybe<Message_Tag_Bool_Exp>
}

/** aggregated selection of "messages" */
export type Messages_Aggregate = {
  __typename?: 'messages_aggregate'
  aggregate?: Maybe<Messages_Aggregate_Fields>
  nodes: Array<Messages>
}

/** aggregate fields of "messages" */
export type Messages_Aggregate_Fields = {
  __typename?: 'messages_aggregate_fields'
  avg?: Maybe<Messages_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Messages_Max_Fields>
  min?: Maybe<Messages_Min_Fields>
  stddev?: Maybe<Messages_Stddev_Fields>
  stddev_pop?: Maybe<Messages_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Messages_Stddev_Samp_Fields>
  sum?: Maybe<Messages_Sum_Fields>
  var_pop?: Maybe<Messages_Var_Pop_Fields>
  var_samp?: Maybe<Messages_Var_Samp_Fields>
  variance?: Maybe<Messages_Variance_Fields>
}

/** aggregate fields of "messages" */
export type Messages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Messages_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "messages" */
export type Messages_Aggregate_Order_By = {
  avg?: Maybe<Messages_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Messages_Max_Order_By>
  min?: Maybe<Messages_Min_Order_By>
  stddev?: Maybe<Messages_Stddev_Order_By>
  stddev_pop?: Maybe<Messages_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Messages_Stddev_Samp_Order_By>
  sum?: Maybe<Messages_Sum_Order_By>
  var_pop?: Maybe<Messages_Var_Pop_Order_By>
  var_samp?: Maybe<Messages_Var_Samp_Order_By>
  variance?: Maybe<Messages_Variance_Order_By>
}

/** input type for inserting array relation for remote table "messages" */
export type Messages_Arr_Rel_Insert_Input = {
  data: Array<Messages_Insert_Input>
  on_conflict?: Maybe<Messages_On_Conflict>
}

/** aggregate avg on columns */
export type Messages_Avg_Fields = {
  __typename?: 'messages_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "messages" */
export type Messages_Avg_Order_By = {
  id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type Messages_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Messages_Bool_Exp>>>
  _not?: Maybe<Messages_Bool_Exp>
  _or?: Maybe<Array<Maybe<Messages_Bool_Exp>>>
  body?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  imageUrl?: Maybe<String_Comparison_Exp>
  message_tags?: Maybe<Message_Tag_Bool_Exp>
  publishedAt?: Maybe<Timestamptz_Comparison_Exp>
  title?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  url?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "messages" */
export enum Messages_Constraint {
  /** unique or primary key constraint */
  MessagesPkey = 'messages_pkey',
}

/** input type for incrementing integer column in table "messages" */
export type Messages_Inc_Input = {
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "messages" */
export type Messages_Insert_Input = {
  body?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  imageUrl?: Maybe<Scalars['String']>
  message_tags?: Maybe<Message_Tag_Arr_Rel_Insert_Input>
  publishedAt?: Maybe<Scalars['timestamptz']>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  url?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Messages_Max_Fields = {
  __typename?: 'messages_max_fields'
  body?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  imageUrl?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['timestamptz']>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  url?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "messages" */
export type Messages_Max_Order_By = {
  body?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  imageUrl?: Maybe<Order_By>
  publishedAt?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  url?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Messages_Min_Fields = {
  __typename?: 'messages_min_fields'
  body?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  imageUrl?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['timestamptz']>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  url?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "messages" */
export type Messages_Min_Order_By = {
  body?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  imageUrl?: Maybe<Order_By>
  publishedAt?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  url?: Maybe<Order_By>
}

/** response of any mutation on the table "messages" */
export type Messages_Mutation_Response = {
  __typename?: 'messages_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Messages>
}

/** input type for inserting object relation for remote table "messages" */
export type Messages_Obj_Rel_Insert_Input = {
  data: Messages_Insert_Input
  on_conflict?: Maybe<Messages_On_Conflict>
}

/** on conflict condition type for table "messages" */
export type Messages_On_Conflict = {
  constraint: Messages_Constraint
  update_columns: Array<Messages_Update_Column>
  where?: Maybe<Messages_Bool_Exp>
}

/** ordering options when selecting data from "messages" */
export type Messages_Order_By = {
  body?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  imageUrl?: Maybe<Order_By>
  message_tags_aggregate?: Maybe<Message_Tag_Aggregate_Order_By>
  publishedAt?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  url?: Maybe<Order_By>
}

/** primary key columns input for table: "messages" */
export type Messages_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "messages" */
export enum Messages_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  PublishedAt = 'publishedAt',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
}

/** input type for updating data in table "messages" */
export type Messages_Set_Input = {
  body?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  imageUrl?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['timestamptz']>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  url?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Messages_Stddev_Fields = {
  __typename?: 'messages_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "messages" */
export type Messages_Stddev_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Messages_Stddev_Pop_Fields = {
  __typename?: 'messages_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "messages" */
export type Messages_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Messages_Stddev_Samp_Fields = {
  __typename?: 'messages_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "messages" */
export type Messages_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Messages_Sum_Fields = {
  __typename?: 'messages_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "messages" */
export type Messages_Sum_Order_By = {
  id?: Maybe<Order_By>
}

/** update columns of table "messages" */
export enum Messages_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  PublishedAt = 'publishedAt',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
}

/** aggregate var_pop on columns */
export type Messages_Var_Pop_Fields = {
  __typename?: 'messages_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "messages" */
export type Messages_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Messages_Var_Samp_Fields = {
  __typename?: 'messages_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "messages" */
export type Messages_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Messages_Variance_Fields = {
  __typename?: 'messages_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "messages" */
export type Messages_Variance_Order_By = {
  id?: Maybe<Order_By>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "message_tag" */
  delete_message_tag?: Maybe<Message_Tag_Mutation_Response>
  /** delete single row from the table: "message_tag" */
  delete_message_tag_by_pk?: Maybe<Message_Tag>
  /** delete data from the table: "messages" */
  delete_messages?: Maybe<Messages_Mutation_Response>
  /** delete single row from the table: "messages" */
  delete_messages_by_pk?: Maybe<Messages>
  /** delete data from the table: "tags" */
  delete_tags?: Maybe<Tags_Mutation_Response>
  /** delete single row from the table: "tags" */
  delete_tags_by_pk?: Maybe<Tags>
  /** insert data into the table: "message_tag" */
  insert_message_tag?: Maybe<Message_Tag_Mutation_Response>
  /** insert a single row into the table: "message_tag" */
  insert_message_tag_one?: Maybe<Message_Tag>
  /** insert data into the table: "messages" */
  insert_messages?: Maybe<Messages_Mutation_Response>
  /** insert a single row into the table: "messages" */
  insert_messages_one?: Maybe<Messages>
  /** insert data into the table: "tags" */
  insert_tags?: Maybe<Tags_Mutation_Response>
  /** insert a single row into the table: "tags" */
  insert_tags_one?: Maybe<Tags>
  /** update data of the table: "message_tag" */
  update_message_tag?: Maybe<Message_Tag_Mutation_Response>
  /** update single row of the table: "message_tag" */
  update_message_tag_by_pk?: Maybe<Message_Tag>
  /** update data of the table: "messages" */
  update_messages?: Maybe<Messages_Mutation_Response>
  /** update single row of the table: "messages" */
  update_messages_by_pk?: Maybe<Messages>
  /** update data of the table: "tags" */
  update_tags?: Maybe<Tags_Mutation_Response>
  /** update single row of the table: "tags" */
  update_tags_by_pk?: Maybe<Tags>
}

/** mutation root */
export type Mutation_RootDelete_Message_TagArgs = {
  where: Message_Tag_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Message_Tag_By_PkArgs = {
  message_id: Scalars['Int']
  tag_id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Messages_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_TagsArgs = {
  where: Tags_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Tags_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootInsert_Message_TagArgs = {
  objects: Array<Message_Tag_Insert_Input>
  on_conflict?: Maybe<Message_Tag_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Message_Tag_OneArgs = {
  object: Message_Tag_Insert_Input
  on_conflict?: Maybe<Message_Tag_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>
  on_conflict?: Maybe<Messages_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input
  on_conflict?: Maybe<Messages_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_TagsArgs = {
  objects: Array<Tags_Insert_Input>
  on_conflict?: Maybe<Tags_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tags_OneArgs = {
  object: Tags_Insert_Input
  on_conflict?: Maybe<Tags_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_Message_TagArgs = {
  _inc?: Maybe<Message_Tag_Inc_Input>
  _set?: Maybe<Message_Tag_Set_Input>
  where: Message_Tag_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Message_Tag_By_PkArgs = {
  _inc?: Maybe<Message_Tag_Inc_Input>
  _set?: Maybe<Message_Tag_Set_Input>
  pk_columns: Message_Tag_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_MessagesArgs = {
  _inc?: Maybe<Messages_Inc_Input>
  _set?: Maybe<Messages_Set_Input>
  where: Messages_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _inc?: Maybe<Messages_Inc_Input>
  _set?: Maybe<Messages_Set_Input>
  pk_columns: Messages_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_TagsArgs = {
  _inc?: Maybe<Tags_Inc_Input>
  _set?: Maybe<Tags_Set_Input>
  where: Tags_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Tags_By_PkArgs = {
  _inc?: Maybe<Tags_Inc_Input>
  _set?: Maybe<Tags_Set_Input>
  pk_columns: Tags_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "message_tag" */
  message_tag: Array<Message_Tag>
  /** fetch aggregated fields from the table: "message_tag" */
  message_tag_aggregate: Message_Tag_Aggregate
  /** fetch data from the table: "message_tag" using primary key columns */
  message_tag_by_pk?: Maybe<Message_Tag>
  /** fetch data from the table: "messages" */
  messages: Array<Messages>
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: Messages_Aggregate
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>
  /** fetch data from the table: "tags" */
  tags: Array<Tags>
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>
}

/** query root */
export type Query_RootMessage_TagArgs = {
  distinct_on?: Maybe<Array<Message_Tag_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Message_Tag_Order_By>>
  where?: Maybe<Message_Tag_Bool_Exp>
}

/** query root */
export type Query_RootMessage_Tag_AggregateArgs = {
  distinct_on?: Maybe<Array<Message_Tag_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Message_Tag_Order_By>>
  where?: Maybe<Message_Tag_Bool_Exp>
}

/** query root */
export type Query_RootMessage_Tag_By_PkArgs = {
  message_id: Scalars['Int']
  tag_id: Scalars['Int']
}

/** query root */
export type Query_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

/** query root */
export type Query_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

/** query root */
export type Query_RootMessages_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootTagsArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tags_Order_By>>
  where?: Maybe<Tags_Bool_Exp>
}

/** query root */
export type Query_RootTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tags_Order_By>>
  where?: Maybe<Tags_Bool_Exp>
}

/** query root */
export type Query_RootTags_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "message_tag" */
  message_tag: Array<Message_Tag>
  /** fetch aggregated fields from the table: "message_tag" */
  message_tag_aggregate: Message_Tag_Aggregate
  /** fetch data from the table: "message_tag" using primary key columns */
  message_tag_by_pk?: Maybe<Message_Tag>
  /** fetch data from the table: "messages" */
  messages: Array<Messages>
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: Messages_Aggregate
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>
  /** fetch data from the table: "tags" */
  tags: Array<Tags>
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>
}

/** subscription root */
export type Subscription_RootMessage_TagArgs = {
  distinct_on?: Maybe<Array<Message_Tag_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Message_Tag_Order_By>>
  where?: Maybe<Message_Tag_Bool_Exp>
}

/** subscription root */
export type Subscription_RootMessage_Tag_AggregateArgs = {
  distinct_on?: Maybe<Array<Message_Tag_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Message_Tag_Order_By>>
  where?: Maybe<Message_Tag_Bool_Exp>
}

/** subscription root */
export type Subscription_RootMessage_Tag_By_PkArgs = {
  message_id: Scalars['Int']
  tag_id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

/** subscription root */
export type Subscription_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

/** subscription root */
export type Subscription_RootMessages_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootTagsArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tags_Order_By>>
  where?: Maybe<Tags_Bool_Exp>
}

/** subscription root */
export type Subscription_RootTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tags_Order_By>>
  where?: Maybe<Tags_Bool_Exp>
}

/** subscription root */
export type Subscription_RootTags_By_PkArgs = {
  id: Scalars['Int']
}

/** columns and relationships of "tags" */
export type Tags = {
  __typename?: 'tags'
  created_at: Scalars['timestamptz']
  id: Scalars['Int']
  /** An array relationship */
  message_tags: Array<Message_Tag>
  /** An aggregated array relationship */
  message_tags_aggregate: Message_Tag_Aggregate
  name: Scalars['String']
  updated_at: Scalars['timestamptz']
}

/** columns and relationships of "tags" */
export type TagsMessage_TagsArgs = {
  distinct_on?: Maybe<Array<Message_Tag_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Message_Tag_Order_By>>
  where?: Maybe<Message_Tag_Bool_Exp>
}

/** columns and relationships of "tags" */
export type TagsMessage_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Message_Tag_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Message_Tag_Order_By>>
  where?: Maybe<Message_Tag_Bool_Exp>
}

/** aggregated selection of "tags" */
export type Tags_Aggregate = {
  __typename?: 'tags_aggregate'
  aggregate?: Maybe<Tags_Aggregate_Fields>
  nodes: Array<Tags>
}

/** aggregate fields of "tags" */
export type Tags_Aggregate_Fields = {
  __typename?: 'tags_aggregate_fields'
  avg?: Maybe<Tags_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Tags_Max_Fields>
  min?: Maybe<Tags_Min_Fields>
  stddev?: Maybe<Tags_Stddev_Fields>
  stddev_pop?: Maybe<Tags_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Tags_Stddev_Samp_Fields>
  sum?: Maybe<Tags_Sum_Fields>
  var_pop?: Maybe<Tags_Var_Pop_Fields>
  var_samp?: Maybe<Tags_Var_Samp_Fields>
  variance?: Maybe<Tags_Variance_Fields>
}

/** aggregate fields of "tags" */
export type Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tags_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "tags" */
export type Tags_Aggregate_Order_By = {
  avg?: Maybe<Tags_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Tags_Max_Order_By>
  min?: Maybe<Tags_Min_Order_By>
  stddev?: Maybe<Tags_Stddev_Order_By>
  stddev_pop?: Maybe<Tags_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Tags_Stddev_Samp_Order_By>
  sum?: Maybe<Tags_Sum_Order_By>
  var_pop?: Maybe<Tags_Var_Pop_Order_By>
  var_samp?: Maybe<Tags_Var_Samp_Order_By>
  variance?: Maybe<Tags_Variance_Order_By>
}

/** input type for inserting array relation for remote table "tags" */
export type Tags_Arr_Rel_Insert_Input = {
  data: Array<Tags_Insert_Input>
  on_conflict?: Maybe<Tags_On_Conflict>
}

/** aggregate avg on columns */
export type Tags_Avg_Fields = {
  __typename?: 'tags_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "tags" */
export type Tags_Avg_Order_By = {
  id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export type Tags_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tags_Bool_Exp>>>
  _not?: Maybe<Tags_Bool_Exp>
  _or?: Maybe<Array<Maybe<Tags_Bool_Exp>>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  message_tags?: Maybe<Message_Tag_Bool_Exp>
  name?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "tags" */
export enum Tags_Constraint {
  /** unique or primary key constraint */
  TagsPkey = 'tags_pkey',
}

/** input type for incrementing integer column in table "tags" */
export type Tags_Inc_Input = {
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "tags" */
export type Tags_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  message_tags?: Maybe<Message_Tag_Arr_Rel_Insert_Input>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Tags_Max_Fields = {
  __typename?: 'tags_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "tags" */
export type Tags_Max_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Tags_Min_Fields = {
  __typename?: 'tags_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "tags" */
export type Tags_Min_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "tags" */
export type Tags_Mutation_Response = {
  __typename?: 'tags_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Tags>
}

/** input type for inserting object relation for remote table "tags" */
export type Tags_Obj_Rel_Insert_Input = {
  data: Tags_Insert_Input
  on_conflict?: Maybe<Tags_On_Conflict>
}

/** on conflict condition type for table "tags" */
export type Tags_On_Conflict = {
  constraint: Tags_Constraint
  update_columns: Array<Tags_Update_Column>
  where?: Maybe<Tags_Bool_Exp>
}

/** ordering options when selecting data from "tags" */
export type Tags_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  message_tags_aggregate?: Maybe<Message_Tag_Aggregate_Order_By>
  name?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: "tags" */
export type Tags_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "tags" */
export enum Tags_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "tags" */
export type Tags_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Tags_Stddev_Fields = {
  __typename?: 'tags_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "tags" */
export type Tags_Stddev_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Tags_Stddev_Pop_Fields = {
  __typename?: 'tags_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "tags" */
export type Tags_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Tags_Stddev_Samp_Fields = {
  __typename?: 'tags_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "tags" */
export type Tags_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Tags_Sum_Fields = {
  __typename?: 'tags_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "tags" */
export type Tags_Sum_Order_By = {
  id?: Maybe<Order_By>
}

/** update columns of table "tags" */
export enum Tags_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Tags_Var_Pop_Fields = {
  __typename?: 'tags_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "tags" */
export type Tags_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Tags_Var_Samp_Fields = {
  __typename?: 'tags_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "tags" */
export type Tags_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Tags_Variance_Fields = {
  __typename?: 'tags_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "tags" */
export type Tags_Variance_Order_By = {
  id?: Maybe<Order_By>
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>
  _gt?: Maybe<Scalars['timestamptz']>
  _gte?: Maybe<Scalars['timestamptz']>
  _in?: Maybe<Array<Scalars['timestamptz']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamptz']>
  _lte?: Maybe<Scalars['timestamptz']>
  _neq?: Maybe<Scalars['timestamptz']>
  _nin?: Maybe<Array<Scalars['timestamptz']>>
}

export type Delete_MessagesMutationVariables = Exact<{
  message_id: Scalars['Int']
}>

export type Delete_MessagesMutation = { __typename?: 'mutation_root' } & {
  delete_message_tag?: Maybe<
    { __typename?: 'message_tag_mutation_response' } & Pick<
      Message_Tag_Mutation_Response,
      'affected_rows'
    >
  >
  delete_messages?: Maybe<
    { __typename?: 'messages_mutation_response' } & Pick<
      Messages_Mutation_Response,
      'affected_rows'
    >
  >
}

export type Insert_Message_Tag_OneMutationVariables = Exact<{
  message_tag: Message_Tag_Insert_Input
}>

export type Insert_Message_Tag_OneMutation = { __typename?: 'mutation_root' } & {
  insert_message_tag_one?: Maybe<
    { __typename?: 'message_tag' } & {
      message: { __typename?: 'messages' } & Pick<Messages, 'id'>
      tag: { __typename?: 'tags' } & Pick<Tags, 'id'>
    }
  >
}

export type Insert_Messages_OneMutationVariables = Exact<{
  message: Messages_Insert_Input
  update_columns: Array<Messages_Update_Column> | Messages_Update_Column
}>

export type Insert_Messages_OneMutation = { __typename?: 'mutation_root' } & {
  insert_messages_one?: Maybe<{ __typename?: 'messages' } & Pick<Messages, 'id'>>
}

export type MessagesQueryVariables = Exact<{ [key: string]: never }>

export type MessagesQuery = { __typename?: 'query_root' } & {
  messages: Array<
    { __typename?: 'messages' } & Pick<
      Messages,
      'id' | 'title' | 'body' | 'url' | 'imageUrl' | 'publishedAt'
    > & {
        message_tags: Array<
          { __typename?: 'message_tag' } & { tag: { __typename?: 'tags' } & Pick<Tags, 'name'> }
        >
      }
  >
}

export type MessagesFragmentFragment = { __typename?: 'messages' } & Pick<
  Messages,
  'id' | 'title' | 'body' | 'url' | 'imageUrl' | 'publishedAt'
> & {
    message_tags: Array<
      { __typename?: 'message_tag' } & { tag: { __typename?: 'tags' } & Pick<Tags, 'name'> }
    >
  }

export type Messages_By_PkQueryVariables = Exact<{
  id: Scalars['Int']
}>

export type Messages_By_PkQuery = { __typename?: 'query_root' } & {
  messages_by_pk?: Maybe<
    { __typename?: 'messages' } & Pick<
      Messages,
      'id' | 'title' | 'body' | 'url' | 'imageUrl' | 'publishedAt'
    > & {
        message_tags: Array<
          { __typename?: 'message_tag' } & { tag: { __typename?: 'tags' } & Pick<Tags, 'name'> }
        >
      }
  >
}

export const MessagesFragmentFragmentDoc = gql`
  fragment messagesFragment on messages {
    id
    title
    body
    url
    imageUrl
    publishedAt
    message_tags {
      tag {
        name
      }
    }
  }
`
export const Delete_MessagesDocument = gql`
  mutation delete_messages($message_id: Int!) {
    delete_message_tag(where: { message: { id: { _lt: $message_id } } }) {
      affected_rows
    }
    delete_messages(where: { id: { _lt: $message_id } }) {
      affected_rows
    }
  }
`
export const Insert_Message_Tag_OneDocument = gql`
  mutation insert_message_tag_one($message_tag: message_tag_insert_input!) {
    insert_message_tag_one(object: $message_tag) {
      message {
        id
      }
      tag {
        id
      }
    }
  }
`
export const Insert_Messages_OneDocument = gql`
  mutation insert_messages_one(
    $message: messages_insert_input!
    $update_columns: [messages_update_column!]!
  ) {
    insert_messages_one(
      object: $message
      on_conflict: { constraint: messages_pkey, update_columns: $update_columns }
    ) {
      id
    }
  }
`
export const MessagesDocument = gql`
  query messages {
    messages(limit: 6, order_by: { id: desc }) {
      id
      title
      body
      url
      imageUrl
      publishedAt
      message_tags {
        tag {
          name
        }
      }
    }
  }
`
export const Messages_By_PkDocument = gql`
  query messages_by_pk($id: Int!) {
    messages_by_pk(id: $id) {
      id
      title
      body
      url
      imageUrl
      publishedAt
      message_tags {
        tag {
          name
        }
      }
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action()

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    delete_messages(
      variables: Delete_MessagesMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Delete_MessagesMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Delete_MessagesMutation>(Delete_MessagesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'delete_messages'
      )
    },
    insert_message_tag_one(
      variables: Insert_Message_Tag_OneMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Insert_Message_Tag_OneMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Insert_Message_Tag_OneMutation>(
            Insert_Message_Tag_OneDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'insert_message_tag_one'
      )
    },
    insert_messages_one(
      variables: Insert_Messages_OneMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Insert_Messages_OneMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Insert_Messages_OneMutation>(Insert_Messages_OneDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'insert_messages_one'
      )
    },
    messages(
      variables?: MessagesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<MessagesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<MessagesQuery>(MessagesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'messages'
      )
    },
    messages_by_pk(
      variables: Messages_By_PkQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Messages_By_PkQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Messages_By_PkQuery>(Messages_By_PkDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'messages_by_pk'
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
