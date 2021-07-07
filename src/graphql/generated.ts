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

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
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

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>
  _is_null?: Maybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>
}

/** columns and relationships of "list_items" */
export type List_Items = {
  __typename?: 'list_items'
  body: Scalars['String']
  created_at: Scalars['timestamptz']
  id: Scalars['Int']
  imageUrl?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['timestamptz']>
  title?: Maybe<Scalars['String']>
  updated_at: Scalars['timestamptz']
  url?: Maybe<Scalars['String']>
}

/** aggregated selection of "list_items" */
export type List_Items_Aggregate = {
  __typename?: 'list_items_aggregate'
  aggregate?: Maybe<List_Items_Aggregate_Fields>
  nodes: Array<List_Items>
}

/** aggregate fields of "list_items" */
export type List_Items_Aggregate_Fields = {
  __typename?: 'list_items_aggregate_fields'
  avg?: Maybe<List_Items_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<List_Items_Max_Fields>
  min?: Maybe<List_Items_Min_Fields>
  stddev?: Maybe<List_Items_Stddev_Fields>
  stddev_pop?: Maybe<List_Items_Stddev_Pop_Fields>
  stddev_samp?: Maybe<List_Items_Stddev_Samp_Fields>
  sum?: Maybe<List_Items_Sum_Fields>
  var_pop?: Maybe<List_Items_Var_Pop_Fields>
  var_samp?: Maybe<List_Items_Var_Samp_Fields>
  variance?: Maybe<List_Items_Variance_Fields>
}

/** aggregate fields of "list_items" */
export type List_Items_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<List_Items_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type List_Items_Avg_Fields = {
  __typename?: 'list_items_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "list_items". All fields are combined with a logical 'AND'. */
export type List_Items_Bool_Exp = {
  _and?: Maybe<Array<List_Items_Bool_Exp>>
  _not?: Maybe<List_Items_Bool_Exp>
  _or?: Maybe<Array<List_Items_Bool_Exp>>
  body?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  imageUrl?: Maybe<String_Comparison_Exp>
  publishedAt?: Maybe<Timestamptz_Comparison_Exp>
  title?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  url?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "list_items" */
export enum List_Items_Constraint {
  /** unique or primary key constraint */
  ListItemsPkey = 'list_items_pkey',
}

/** input type for incrementing numeric columns in table "list_items" */
export type List_Items_Inc_Input = {
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "list_items" */
export type List_Items_Insert_Input = {
  body?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  imageUrl?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['timestamptz']>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  url?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type List_Items_Max_Fields = {
  __typename?: 'list_items_max_fields'
  body?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  imageUrl?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['timestamptz']>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  url?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type List_Items_Min_Fields = {
  __typename?: 'list_items_min_fields'
  body?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  imageUrl?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['timestamptz']>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
  url?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "list_items" */
export type List_Items_Mutation_Response = {
  __typename?: 'list_items_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<List_Items>
}

/** on conflict condition type for table "list_items" */
export type List_Items_On_Conflict = {
  constraint: List_Items_Constraint
  update_columns?: Array<List_Items_Update_Column>
  where?: Maybe<List_Items_Bool_Exp>
}

/** Ordering options when selecting data from "list_items". */
export type List_Items_Order_By = {
  body?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  imageUrl?: Maybe<Order_By>
  publishedAt?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  url?: Maybe<Order_By>
}

/** primary key columns input for table: list_items */
export type List_Items_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "list_items" */
export enum List_Items_Select_Column {
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

/** input type for updating data in table "list_items" */
export type List_Items_Set_Input = {
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
export type List_Items_Stddev_Fields = {
  __typename?: 'list_items_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type List_Items_Stddev_Pop_Fields = {
  __typename?: 'list_items_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type List_Items_Stddev_Samp_Fields = {
  __typename?: 'list_items_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type List_Items_Sum_Fields = {
  __typename?: 'list_items_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** update columns of table "list_items" */
export enum List_Items_Update_Column {
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
export type List_Items_Var_Pop_Fields = {
  __typename?: 'list_items_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type List_Items_Var_Samp_Fields = {
  __typename?: 'list_items_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type List_Items_Variance_Fields = {
  __typename?: 'list_items_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "list_items" */
  delete_list_items?: Maybe<List_Items_Mutation_Response>
  /** delete single row from the table: "list_items" */
  delete_list_items_by_pk?: Maybe<List_Items>
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>
  /** insert data into the table: "list_items" */
  insert_list_items?: Maybe<List_Items_Mutation_Response>
  /** insert a single row into the table: "list_items" */
  insert_list_items_one?: Maybe<List_Items>
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>
  /** update data of the table: "list_items" */
  update_list_items?: Maybe<List_Items_Mutation_Response>
  /** update single row of the table: "list_items" */
  update_list_items_by_pk?: Maybe<List_Items>
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>
}

/** mutation root */
export type Mutation_RootDelete_List_ItemsArgs = {
  where: List_Items_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_List_Items_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  name: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootInsert_List_ItemsArgs = {
  objects: Array<List_Items_Insert_Input>
  on_conflict?: Maybe<List_Items_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_List_Items_OneArgs = {
  object: List_Items_Insert_Input
  on_conflict?: Maybe<List_Items_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>
  on_conflict?: Maybe<Roles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input
  on_conflict?: Maybe<Roles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_List_ItemsArgs = {
  _inc?: Maybe<List_Items_Inc_Input>
  _set?: Maybe<List_Items_Set_Input>
  where: List_Items_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_List_Items_By_PkArgs = {
  _inc?: Maybe<List_Items_Inc_Input>
  _set?: Maybe<List_Items_Set_Input>
  pk_columns: List_Items_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _set?: Maybe<Roles_Set_Input>
  where: Roles_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _set?: Maybe<Roles_Set_Input>
  pk_columns: Roles_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>
  pk_columns: Users_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "list_items" */
  list_items: Array<List_Items>
  /** fetch aggregated fields from the table: "list_items" */
  list_items_aggregate: List_Items_Aggregate
  /** fetch data from the table: "list_items" using primary key columns */
  list_items_by_pk?: Maybe<List_Items>
  /** fetch data from the table: "roles" */
  roles: Array<Roles>
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

export type Query_RootList_ItemsArgs = {
  distinct_on?: Maybe<Array<List_Items_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<List_Items_Order_By>>
  where?: Maybe<List_Items_Bool_Exp>
}

export type Query_RootList_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<List_Items_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<List_Items_Order_By>>
  where?: Maybe<List_Items_Bool_Exp>
}

export type Query_RootList_Items_By_PkArgs = {
  id: Scalars['Int']
}

export type Query_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Roles_Order_By>>
  where?: Maybe<Roles_Bool_Exp>
}

export type Query_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Roles_Order_By>>
  where?: Maybe<Roles_Bool_Exp>
}

export type Query_RootRoles_By_PkArgs = {
  name: Scalars['String']
}

export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String']
}

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'roles'
  name: Scalars['String']
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate
}

/** columns and relationships of "roles" */
export type RolesUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** columns and relationships of "roles" */
export type RolesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  __typename?: 'roles_aggregate'
  aggregate?: Maybe<Roles_Aggregate_Fields>
  nodes: Array<Roles>
}

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  __typename?: 'roles_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Roles_Max_Fields>
  min?: Maybe<Roles_Min_Fields>
}

/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Roles_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: Maybe<Array<Roles_Bool_Exp>>
  _not?: Maybe<Roles_Bool_Exp>
  _or?: Maybe<Array<Roles_Bool_Exp>>
  name?: Maybe<String_Comparison_Exp>
  users?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey',
}

export enum Roles_Enum {
  Admin = 'admin',
  User = 'user',
}

/** Boolean expression to compare columns of type "roles_enum". All fields are combined with logical 'AND'. */
export type Roles_Enum_Comparison_Exp = {
  _eq?: Maybe<Roles_Enum>
  _in?: Maybe<Array<Roles_Enum>>
  _is_null?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Roles_Enum>
  _nin?: Maybe<Array<Roles_Enum>>
}

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  name?: Maybe<Scalars['String']>
  users?: Maybe<Users_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: 'roles_max_fields'
  name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: 'roles_min_fields'
  name?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  __typename?: 'roles_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Roles>
}

/** input type for inserting object relation for remote table "roles" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Roles_On_Conflict>
}

/** on conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint
  update_columns?: Array<Roles_Update_Column>
  where?: Maybe<Roles_Bool_Exp>
}

/** Ordering options when selecting data from "roles". */
export type Roles_Order_By = {
  name?: Maybe<Order_By>
  users_aggregate?: Maybe<Users_Aggregate_Order_By>
}

/** primary key columns input for table: roles */
export type Roles_Pk_Columns_Input = {
  name: Scalars['String']
}

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  name?: Maybe<Scalars['String']>
}

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  Name = 'name',
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "list_items" */
  list_items: Array<List_Items>
  /** fetch aggregated fields from the table: "list_items" */
  list_items_aggregate: List_Items_Aggregate
  /** fetch data from the table: "list_items" using primary key columns */
  list_items_by_pk?: Maybe<List_Items>
  /** fetch data from the table: "roles" */
  roles: Array<Roles>
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

export type Subscription_RootList_ItemsArgs = {
  distinct_on?: Maybe<Array<List_Items_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<List_Items_Order_By>>
  where?: Maybe<List_Items_Bool_Exp>
}

export type Subscription_RootList_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<List_Items_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<List_Items_Order_By>>
  where?: Maybe<List_Items_Bool_Exp>
}

export type Subscription_RootList_Items_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Roles_Order_By>>
  where?: Maybe<Roles_Bool_Exp>
}

export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Roles_Order_By>>
  where?: Maybe<Roles_Bool_Exp>
}

export type Subscription_RootRoles_By_PkArgs = {
  name: Scalars['String']
}

export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String']
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
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

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users'
  created_at: Scalars['timestamptz']
  email?: Maybe<Scalars['String']>
  email_verified?: Maybe<Scalars['timestamptz']>
  id: Scalars['String']
  image?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  oauth_id?: Maybe<Scalars['String']>
  role?: Maybe<Roles_Enum>
  /** An object relationship */
  roleByRole?: Maybe<Roles>
  updated_at: Scalars['timestamptz']
}

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Users_Max_Fields>
  min?: Maybe<Users_Min_Fields>
}

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Users_Max_Order_By>
  min?: Maybe<Users_Min_Order_By>
}

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>
  _not?: Maybe<Users_Bool_Exp>
  _or?: Maybe<Array<Users_Bool_Exp>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  email?: Maybe<String_Comparison_Exp>
  email_verified?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<String_Comparison_Exp>
  image?: Maybe<String_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  oauth_id?: Maybe<String_Comparison_Exp>
  role?: Maybe<Roles_Enum_Comparison_Exp>
  roleByRole?: Maybe<Roles_Bool_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  Email = 'email',
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersOauthIdKey = 'users_oauth_id_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  email_verified?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  oauth_id?: Maybe<Scalars['String']>
  role?: Maybe<Roles_Enum>
  roleByRole?: Maybe<Roles_Obj_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  email_verified?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  oauth_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  email_verified?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image?: Maybe<Order_By>
  name?: Maybe<Order_By>
  oauth_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  email_verified?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  oauth_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  email_verified?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image?: Maybe<Order_By>
  name?: Maybe<Order_By>
  oauth_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Users>
}

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint
  update_columns?: Array<Users_Update_Column>
  where?: Maybe<Users_Bool_Exp>
}

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  email_verified?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image?: Maybe<Order_By>
  name?: Maybe<Order_By>
  oauth_id?: Maybe<Order_By>
  role?: Maybe<Order_By>
  roleByRole?: Maybe<Roles_Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String']
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  OauthId = 'oauth_id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  email_verified?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  oauth_id?: Maybe<Scalars['String']>
  role?: Maybe<Roles_Enum>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  OauthId = 'oauth_id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Delete_List_Item_By_PkMutationVariables = Exact<{
  list_item_id: Scalars['Int']
}>

export type Delete_List_Item_By_PkMutation = { __typename?: 'mutation_root' } & {
  delete_list_items?: Maybe<
    { __typename?: 'list_items_mutation_response' } & Pick<
      List_Items_Mutation_Response,
      'affected_rows'
    >
  >
}

export type Insert_List_Items_OneMutationVariables = Exact<{
  list_item: List_Items_Insert_Input
  update_columns: Array<List_Items_Update_Column> | List_Items_Update_Column
}>

export type Insert_List_Items_OneMutation = { __typename?: 'mutation_root' } & {
  insert_list_items_one?: Maybe<{ __typename?: 'list_items' } & List_ItemsFragmentFragment>
}

export type List_ItemsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}>

export type List_ItemsQuery = { __typename?: 'query_root' } & {
  list_items: Array<{ __typename?: 'list_items' } & List_ItemsFragmentFragment>
  list_items_aggregate: { __typename?: 'list_items_aggregate' } & {
    aggregate?: Maybe<
      { __typename?: 'list_items_aggregate_fields' } & Pick<List_Items_Aggregate_Fields, 'count'>
    >
  }
}

export type List_ItemsFragmentFragment = { __typename?: 'list_items' } & Pick<
  List_Items,
  'id' | 'title' | 'body' | 'url' | 'imageUrl' | 'publishedAt'
>

export type List_Items_By_PkQueryVariables = Exact<{
  id: Scalars['Int']
}>

export type List_Items_By_PkQuery = { __typename?: 'query_root' } & {
  list_items_by_pk?: Maybe<{ __typename?: 'list_items' } & List_ItemsFragmentFragment>
}

export type Delete_Users_By_PkMutationVariables = Exact<{
  id: Scalars['String']
}>

export type Delete_Users_By_PkMutation = { __typename?: 'mutation_root' } & {
  delete_users_by_pk?: Maybe<{ __typename?: 'users' } & UsersFragmentFragment>
}

export type Insert_Users_OneMutationVariables = Exact<{
  user: Users_Insert_Input
}>

export type Insert_Users_OneMutation = { __typename?: 'mutation_root' } & {
  insert_users_one?: Maybe<{ __typename?: 'users' } & UsersFragmentFragment>
}

export type UsersQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}>

export type UsersQuery = { __typename?: 'query_root' } & {
  users: Array<{ __typename?: 'users' } & UsersFragmentFragment>
  users_aggregate: { __typename?: 'users_aggregate' } & {
    aggregate?: Maybe<
      { __typename?: 'users_aggregate_fields' } & Pick<Users_Aggregate_Fields, 'count'>
    >
  }
}

export type UsersFragmentFragment = { __typename?: 'users' } & Pick<
  Users,
  'id' | 'name' | 'email' | 'image' | 'role' | 'created_at'
>

export type Users_By_Oauth_IdQueryVariables = Exact<{
  oauth_id: Scalars['String']
}>

export type Users_By_Oauth_IdQuery = { __typename?: 'query_root' } & {
  users: Array<{ __typename?: 'users' } & UsersFragmentFragment>
}

export type Users_By_PkQueryVariables = Exact<{
  id: Scalars['String']
}>

export type Users_By_PkQuery = { __typename?: 'query_root' } & {
  users_by_pk?: Maybe<{ __typename?: 'users' } & UsersFragmentFragment>
}

export const List_ItemsFragmentFragmentDoc = gql`
  fragment list_itemsFragment on list_items {
    id
    title
    body
    url
    imageUrl
    publishedAt
  }
`
export const UsersFragmentFragmentDoc = gql`
  fragment usersFragment on users {
    id
    name
    email
    image
    role
    created_at
  }
`
export const Delete_List_Item_By_PkDocument = gql`
  mutation delete_list_item_by_pk($list_item_id: Int!) {
    delete_list_items(where: { id: { _lt: $list_item_id } }) {
      affected_rows
    }
  }
`
export const Insert_List_Items_OneDocument = gql`
  mutation insert_list_items_one(
    $list_item: list_items_insert_input!
    $update_columns: [list_items_update_column!]!
  ) {
    insert_list_items_one(
      object: $list_item
      on_conflict: { constraint: list_items_pkey, update_columns: $update_columns }
    ) {
      ...list_itemsFragment
    }
  }
  ${List_ItemsFragmentFragmentDoc}
`
export const List_ItemsDocument = gql`
  query list_items($limit: Int, $offset: Int) {
    list_items(limit: $limit, offset: $offset, order_by: { id: desc }) {
      ...list_itemsFragment
    }
    list_items_aggregate {
      aggregate {
        count
      }
    }
  }
  ${List_ItemsFragmentFragmentDoc}
`
export const List_Items_By_PkDocument = gql`
  query list_items_by_pk($id: Int!) {
    list_items_by_pk(id: $id) {
      ...list_itemsFragment
    }
  }
  ${List_ItemsFragmentFragmentDoc}
`
export const Delete_Users_By_PkDocument = gql`
  mutation delete_users_by_pk($id: String!) {
    delete_users_by_pk(id: $id) {
      ...usersFragment
    }
  }
  ${UsersFragmentFragmentDoc}
`
export const Insert_Users_OneDocument = gql`
  mutation insert_users_one($user: users_insert_input!) {
    insert_users_one(
      object: $user
      on_conflict: { constraint: users_pkey, update_columns: [name, email, role] }
    ) {
      ...usersFragment
    }
  }
  ${UsersFragmentFragmentDoc}
`
export const UsersDocument = gql`
  query users($limit: Int, $offset: Int) {
    users(limit: $limit, offset: $offset, order_by: { id: desc }) {
      ...usersFragment
    }
    users_aggregate {
      aggregate {
        count
      }
    }
  }
  ${UsersFragmentFragmentDoc}
`
export const Users_By_Oauth_IdDocument = gql`
  query users_by_oauth_id($oauth_id: String!) {
    users(where: { oauth_id: { _eq: $oauth_id } }) {
      ...usersFragment
    }
  }
  ${UsersFragmentFragmentDoc}
`
export const Users_By_PkDocument = gql`
  query users_by_pk($id: String!) {
    users_by_pk(id: $id) {
      ...usersFragment
    }
  }
  ${UsersFragmentFragmentDoc}
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action()

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    delete_list_item_by_pk(
      variables: Delete_List_Item_By_PkMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Delete_List_Item_By_PkMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Delete_List_Item_By_PkMutation>(
            Delete_List_Item_By_PkDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'delete_list_item_by_pk'
      )
    },
    insert_list_items_one(
      variables: Insert_List_Items_OneMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Insert_List_Items_OneMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Insert_List_Items_OneMutation>(Insert_List_Items_OneDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'insert_list_items_one'
      )
    },
    list_items(
      variables?: List_ItemsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<List_ItemsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<List_ItemsQuery>(List_ItemsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'list_items'
      )
    },
    list_items_by_pk(
      variables: List_Items_By_PkQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<List_Items_By_PkQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<List_Items_By_PkQuery>(List_Items_By_PkDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'list_items_by_pk'
      )
    },
    delete_users_by_pk(
      variables: Delete_Users_By_PkMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Delete_Users_By_PkMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Delete_Users_By_PkMutation>(Delete_Users_By_PkDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'delete_users_by_pk'
      )
    },
    insert_users_one(
      variables: Insert_Users_OneMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Insert_Users_OneMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Insert_Users_OneMutation>(Insert_Users_OneDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'insert_users_one'
      )
    },
    users(
      variables?: UsersQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<UsersQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UsersQuery>(UsersDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'users'
      )
    },
    users_by_oauth_id(
      variables: Users_By_Oauth_IdQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Users_By_Oauth_IdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Users_By_Oauth_IdQuery>(Users_By_Oauth_IdDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'users_by_oauth_id'
      )
    },
    users_by_pk(
      variables: Users_By_PkQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Users_By_PkQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Users_By_PkQuery>(Users_By_PkDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'users_by_pk'
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
