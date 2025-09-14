
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Locality
 * 
 */
export type Locality = $Result.DefaultSelection<Prisma.$LocalityPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Listings
 * 
 */
export type Listings = $Result.DefaultSelection<Prisma.$ListingsPayload>
/**
 * Model Amenity
 * 
 */
export type Amenity = $Result.DefaultSelection<Prisma.$AmenityPayload>
/**
 * Model ListingAmenity
 * 
 */
export type ListingAmenity = $Result.DefaultSelection<Prisma.$ListingAmenityPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ListingType: {
  PRIVATE_ROOM: 'PRIVATE_ROOM',
  SHARED_ROOM: 'SHARED_ROOM'
};

export type ListingType = (typeof ListingType)[keyof typeof ListingType]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type ListingType = $Enums.ListingType

export const ListingType: typeof $Enums.ListingType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locality`: Exposes CRUD operations for the **Locality** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Localities
    * const localities = await prisma.locality.findMany()
    * ```
    */
  get locality(): Prisma.LocalityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listings`: Exposes CRUD operations for the **Listings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listings
    * const listings = await prisma.listings.findMany()
    * ```
    */
  get listings(): Prisma.ListingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.amenity`: Exposes CRUD operations for the **Amenity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Amenities
    * const amenities = await prisma.amenity.findMany()
    * ```
    */
  get amenity(): Prisma.AmenityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listingAmenity`: Exposes CRUD operations for the **ListingAmenity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListingAmenities
    * const listingAmenities = await prisma.listingAmenity.findMany()
    * ```
    */
  get listingAmenity(): Prisma.ListingAmenityDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Locality: 'Locality',
    Review: 'Review',
    Listings: 'Listings',
    Amenity: 'Amenity',
    ListingAmenity: 'ListingAmenity'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "locality" | "review" | "listings" | "amenity" | "listingAmenity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Locality: {
        payload: Prisma.$LocalityPayload<ExtArgs>
        fields: Prisma.LocalityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalityPayload>
          }
          findFirst: {
            args: Prisma.LocalityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalityPayload>
          }
          findMany: {
            args: Prisma.LocalityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalityPayload>[]
          }
          create: {
            args: Prisma.LocalityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalityPayload>
          }
          createMany: {
            args: Prisma.LocalityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocalityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalityPayload>[]
          }
          delete: {
            args: Prisma.LocalityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalityPayload>
          }
          update: {
            args: Prisma.LocalityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalityPayload>
          }
          deleteMany: {
            args: Prisma.LocalityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocalityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalityPayload>[]
          }
          upsert: {
            args: Prisma.LocalityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalityPayload>
          }
          aggregate: {
            args: Prisma.LocalityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocality>
          }
          groupBy: {
            args: Prisma.LocalityGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalityGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalityCountArgs<ExtArgs>
            result: $Utils.Optional<LocalityCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Listings: {
        payload: Prisma.$ListingsPayload<ExtArgs>
        fields: Prisma.ListingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingsPayload>
          }
          findFirst: {
            args: Prisma.ListingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingsPayload>
          }
          findMany: {
            args: Prisma.ListingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingsPayload>[]
          }
          create: {
            args: Prisma.ListingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingsPayload>
          }
          createMany: {
            args: Prisma.ListingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingsPayload>[]
          }
          delete: {
            args: Prisma.ListingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingsPayload>
          }
          update: {
            args: Prisma.ListingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingsPayload>
          }
          deleteMany: {
            args: Prisma.ListingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingsPayload>[]
          }
          upsert: {
            args: Prisma.ListingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingsPayload>
          }
          aggregate: {
            args: Prisma.ListingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListings>
          }
          groupBy: {
            args: Prisma.ListingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingsCountArgs<ExtArgs>
            result: $Utils.Optional<ListingsCountAggregateOutputType> | number
          }
        }
      }
      Amenity: {
        payload: Prisma.$AmenityPayload<ExtArgs>
        fields: Prisma.AmenityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmenityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmenityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          findFirst: {
            args: Prisma.AmenityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmenityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          findMany: {
            args: Prisma.AmenityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          create: {
            args: Prisma.AmenityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          createMany: {
            args: Prisma.AmenityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmenityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          delete: {
            args: Prisma.AmenityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          update: {
            args: Prisma.AmenityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          deleteMany: {
            args: Prisma.AmenityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmenityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AmenityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          upsert: {
            args: Prisma.AmenityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          aggregate: {
            args: Prisma.AmenityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmenity>
          }
          groupBy: {
            args: Prisma.AmenityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmenityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmenityCountArgs<ExtArgs>
            result: $Utils.Optional<AmenityCountAggregateOutputType> | number
          }
        }
      }
      ListingAmenity: {
        payload: Prisma.$ListingAmenityPayload<ExtArgs>
        fields: Prisma.ListingAmenityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingAmenityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingAmenityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingAmenityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingAmenityPayload>
          }
          findFirst: {
            args: Prisma.ListingAmenityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingAmenityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingAmenityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingAmenityPayload>
          }
          findMany: {
            args: Prisma.ListingAmenityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingAmenityPayload>[]
          }
          create: {
            args: Prisma.ListingAmenityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingAmenityPayload>
          }
          createMany: {
            args: Prisma.ListingAmenityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListingAmenityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingAmenityPayload>[]
          }
          delete: {
            args: Prisma.ListingAmenityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingAmenityPayload>
          }
          update: {
            args: Prisma.ListingAmenityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingAmenityPayload>
          }
          deleteMany: {
            args: Prisma.ListingAmenityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingAmenityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListingAmenityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingAmenityPayload>[]
          }
          upsert: {
            args: Prisma.ListingAmenityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingAmenityPayload>
          }
          aggregate: {
            args: Prisma.ListingAmenityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListingAmenity>
          }
          groupBy: {
            args: Prisma.ListingAmenityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingAmenityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingAmenityCountArgs<ExtArgs>
            result: $Utils.Optional<ListingAmenityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    locality?: LocalityOmit
    review?: ReviewOmit
    listings?: ListingsOmit
    amenity?: AmenityOmit
    listingAmenity?: ListingAmenityOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    listings: number
    reviewsWritten: number
    reviewsReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | UserCountOutputTypeCountListingsArgs
    reviewsWritten?: boolean | UserCountOutputTypeCountReviewsWrittenArgs
    reviewsReceived?: boolean | UserCountOutputTypeCountReviewsReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsWrittenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type LocalityCountOutputType
   */

  export type LocalityCountOutputType = {
    listings: number
  }

  export type LocalityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | LocalityCountOutputTypeCountListingsArgs
  }

  // Custom InputTypes
  /**
   * LocalityCountOutputType without action
   */
  export type LocalityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalityCountOutputType
     */
    select?: LocalityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocalityCountOutputType without action
   */
  export type LocalityCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingsWhereInput
  }


  /**
   * Count Type ListingsCountOutputType
   */

  export type ListingsCountOutputType = {
    amenities: number
  }

  export type ListingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amenities?: boolean | ListingsCountOutputTypeCountAmenitiesArgs
  }

  // Custom InputTypes
  /**
   * ListingsCountOutputType without action
   */
  export type ListingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingsCountOutputType
     */
    select?: ListingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListingsCountOutputType without action
   */
  export type ListingsCountOutputTypeCountAmenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingAmenityWhereInput
  }


  /**
   * Count Type AmenityCountOutputType
   */

  export type AmenityCountOutputType = {
    listings: number
  }

  export type AmenityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | AmenityCountOutputTypeCountListingsArgs
  }

  // Custom InputTypes
  /**
   * AmenityCountOutputType without action
   */
  export type AmenityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityCountOutputType
     */
    select?: AmenityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AmenityCountOutputType without action
   */
  export type AmenityCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingAmenityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    f_user_id: string | null
    email: string | null
    email_verified: boolean | null
    picture: string | null
    name: string | null
    role: $Enums.Role | null
    lastSignedIn: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    f_user_id: string | null
    email: string | null
    email_verified: boolean | null
    picture: string | null
    name: string | null
    role: $Enums.Role | null
    lastSignedIn: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    f_user_id: number
    email: number
    email_verified: number
    picture: number
    name: number
    role: number
    lastSignedIn: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    f_user_id?: true
    email?: true
    email_verified?: true
    picture?: true
    name?: true
    role?: true
    lastSignedIn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    f_user_id?: true
    email?: true
    email_verified?: true
    picture?: true
    name?: true
    role?: true
    lastSignedIn?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    f_user_id?: true
    email?: true
    email_verified?: true
    picture?: true
    name?: true
    role?: true
    lastSignedIn?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    f_user_id: string
    email: string
    email_verified: boolean
    picture: string | null
    name: string | null
    role: $Enums.Role
    lastSignedIn: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    f_user_id?: boolean
    email?: boolean
    email_verified?: boolean
    picture?: boolean
    name?: boolean
    role?: boolean
    lastSignedIn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    listings?: boolean | User$listingsArgs<ExtArgs>
    reviewsWritten?: boolean | User$reviewsWrittenArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    f_user_id?: boolean
    email?: boolean
    email_verified?: boolean
    picture?: boolean
    name?: boolean
    role?: boolean
    lastSignedIn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    f_user_id?: boolean
    email?: boolean
    email_verified?: boolean
    picture?: boolean
    name?: boolean
    role?: boolean
    lastSignedIn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    f_user_id?: boolean
    email?: boolean
    email_verified?: boolean
    picture?: boolean
    name?: boolean
    role?: boolean
    lastSignedIn?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "f_user_id" | "email" | "email_verified" | "picture" | "name" | "role" | "lastSignedIn" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | User$listingsArgs<ExtArgs>
    reviewsWritten?: boolean | User$reviewsWrittenArgs<ExtArgs>
    reviewsReceived?: boolean | User$reviewsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      listings: Prisma.$ListingsPayload<ExtArgs>[]
      reviewsWritten: Prisma.$ReviewPayload<ExtArgs>[]
      reviewsReceived: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      f_user_id: string
      email: string
      email_verified: boolean
      picture: string | null
      name: string | null
      role: $Enums.Role
      lastSignedIn: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listings<T extends User$listingsArgs<ExtArgs> = {}>(args?: Subset<T, User$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsWritten<T extends User$reviewsWrittenArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsWrittenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsReceived<T extends User$reviewsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly f_user_id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly email_verified: FieldRef<"User", 'Boolean'>
    readonly picture: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly lastSignedIn: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.listings
   */
  export type User$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listings
     */
    select?: ListingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listings
     */
    omit?: ListingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingsInclude<ExtArgs> | null
    where?: ListingsWhereInput
    orderBy?: ListingsOrderByWithRelationInput | ListingsOrderByWithRelationInput[]
    cursor?: ListingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingsScalarFieldEnum | ListingsScalarFieldEnum[]
  }

  /**
   * User.reviewsWritten
   */
  export type User$reviewsWrittenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.reviewsReceived
   */
  export type User$reviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Locality
   */

  export type AggregateLocality = {
    _count: LocalityCountAggregateOutputType | null
    _min: LocalityMinAggregateOutputType | null
    _max: LocalityMaxAggregateOutputType | null
  }

  export type LocalityMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    slug: string | null
  }

  export type LocalityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    slug: string | null
  }

  export type LocalityCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    slug: number
    _all: number
  }


  export type LocalityMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    slug?: true
  }

  export type LocalityMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    slug?: true
  }

  export type LocalityCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    slug?: true
    _all?: true
  }

  export type LocalityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locality to aggregate.
     */
    where?: LocalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localities to fetch.
     */
    orderBy?: LocalityOrderByWithRelationInput | LocalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Localities
    **/
    _count?: true | LocalityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalityMaxAggregateInputType
  }

  export type GetLocalityAggregateType<T extends LocalityAggregateArgs> = {
        [P in keyof T & keyof AggregateLocality]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocality[P]>
      : GetScalarType<T[P], AggregateLocality[P]>
  }




  export type LocalityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalityWhereInput
    orderBy?: LocalityOrderByWithAggregationInput | LocalityOrderByWithAggregationInput[]
    by: LocalityScalarFieldEnum[] | LocalityScalarFieldEnum
    having?: LocalityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalityCountAggregateInputType | true
    _min?: LocalityMinAggregateInputType
    _max?: LocalityMaxAggregateInputType
  }

  export type LocalityGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    slug: string
    _count: LocalityCountAggregateOutputType | null
    _min: LocalityMinAggregateOutputType | null
    _max: LocalityMaxAggregateOutputType | null
  }

  type GetLocalityGroupByPayload<T extends LocalityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalityGroupByOutputType[P]>
            : GetScalarType<T[P], LocalityGroupByOutputType[P]>
        }
      >
    >


  export type LocalitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slug?: boolean
    listings?: boolean | Locality$listingsArgs<ExtArgs>
    _count?: boolean | LocalityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locality"]>

  export type LocalitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slug?: boolean
  }, ExtArgs["result"]["locality"]>

  export type LocalitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slug?: boolean
  }, ExtArgs["result"]["locality"]>

  export type LocalitySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slug?: boolean
  }

  export type LocalityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "slug", ExtArgs["result"]["locality"]>
  export type LocalityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | Locality$listingsArgs<ExtArgs>
    _count?: boolean | LocalityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocalityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocalityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocalityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Locality"
    objects: {
      listings: Prisma.$ListingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      slug: string
    }, ExtArgs["result"]["locality"]>
    composites: {}
  }

  type LocalityGetPayload<S extends boolean | null | undefined | LocalityDefaultArgs> = $Result.GetResult<Prisma.$LocalityPayload, S>

  type LocalityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalityCountAggregateInputType | true
    }

  export interface LocalityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Locality'], meta: { name: 'Locality' } }
    /**
     * Find zero or one Locality that matches the filter.
     * @param {LocalityFindUniqueArgs} args - Arguments to find a Locality
     * @example
     * // Get one Locality
     * const locality = await prisma.locality.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalityFindUniqueArgs>(args: SelectSubset<T, LocalityFindUniqueArgs<ExtArgs>>): Prisma__LocalityClient<$Result.GetResult<Prisma.$LocalityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Locality that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalityFindUniqueOrThrowArgs} args - Arguments to find a Locality
     * @example
     * // Get one Locality
     * const locality = await prisma.locality.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalityFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalityClient<$Result.GetResult<Prisma.$LocalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locality that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalityFindFirstArgs} args - Arguments to find a Locality
     * @example
     * // Get one Locality
     * const locality = await prisma.locality.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalityFindFirstArgs>(args?: SelectSubset<T, LocalityFindFirstArgs<ExtArgs>>): Prisma__LocalityClient<$Result.GetResult<Prisma.$LocalityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locality that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalityFindFirstOrThrowArgs} args - Arguments to find a Locality
     * @example
     * // Get one Locality
     * const locality = await prisma.locality.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalityFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalityFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalityClient<$Result.GetResult<Prisma.$LocalityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Localities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Localities
     * const localities = await prisma.locality.findMany()
     * 
     * // Get first 10 Localities
     * const localities = await prisma.locality.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localityWithIdOnly = await prisma.locality.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocalityFindManyArgs>(args?: SelectSubset<T, LocalityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Locality.
     * @param {LocalityCreateArgs} args - Arguments to create a Locality.
     * @example
     * // Create one Locality
     * const Locality = await prisma.locality.create({
     *   data: {
     *     // ... data to create a Locality
     *   }
     * })
     * 
     */
    create<T extends LocalityCreateArgs>(args: SelectSubset<T, LocalityCreateArgs<ExtArgs>>): Prisma__LocalityClient<$Result.GetResult<Prisma.$LocalityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Localities.
     * @param {LocalityCreateManyArgs} args - Arguments to create many Localities.
     * @example
     * // Create many Localities
     * const locality = await prisma.locality.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalityCreateManyArgs>(args?: SelectSubset<T, LocalityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Localities and returns the data saved in the database.
     * @param {LocalityCreateManyAndReturnArgs} args - Arguments to create many Localities.
     * @example
     * // Create many Localities
     * const locality = await prisma.locality.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Localities and only return the `id`
     * const localityWithIdOnly = await prisma.locality.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocalityCreateManyAndReturnArgs>(args?: SelectSubset<T, LocalityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Locality.
     * @param {LocalityDeleteArgs} args - Arguments to delete one Locality.
     * @example
     * // Delete one Locality
     * const Locality = await prisma.locality.delete({
     *   where: {
     *     // ... filter to delete one Locality
     *   }
     * })
     * 
     */
    delete<T extends LocalityDeleteArgs>(args: SelectSubset<T, LocalityDeleteArgs<ExtArgs>>): Prisma__LocalityClient<$Result.GetResult<Prisma.$LocalityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Locality.
     * @param {LocalityUpdateArgs} args - Arguments to update one Locality.
     * @example
     * // Update one Locality
     * const locality = await prisma.locality.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalityUpdateArgs>(args: SelectSubset<T, LocalityUpdateArgs<ExtArgs>>): Prisma__LocalityClient<$Result.GetResult<Prisma.$LocalityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Localities.
     * @param {LocalityDeleteManyArgs} args - Arguments to filter Localities to delete.
     * @example
     * // Delete a few Localities
     * const { count } = await prisma.locality.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalityDeleteManyArgs>(args?: SelectSubset<T, LocalityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Localities
     * const locality = await prisma.locality.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalityUpdateManyArgs>(args: SelectSubset<T, LocalityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localities and returns the data updated in the database.
     * @param {LocalityUpdateManyAndReturnArgs} args - Arguments to update many Localities.
     * @example
     * // Update many Localities
     * const locality = await prisma.locality.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Localities and only return the `id`
     * const localityWithIdOnly = await prisma.locality.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocalityUpdateManyAndReturnArgs>(args: SelectSubset<T, LocalityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Locality.
     * @param {LocalityUpsertArgs} args - Arguments to update or create a Locality.
     * @example
     * // Update or create a Locality
     * const locality = await prisma.locality.upsert({
     *   create: {
     *     // ... data to create a Locality
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Locality we want to update
     *   }
     * })
     */
    upsert<T extends LocalityUpsertArgs>(args: SelectSubset<T, LocalityUpsertArgs<ExtArgs>>): Prisma__LocalityClient<$Result.GetResult<Prisma.$LocalityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Localities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalityCountArgs} args - Arguments to filter Localities to count.
     * @example
     * // Count the number of Localities
     * const count = await prisma.locality.count({
     *   where: {
     *     // ... the filter for the Localities we want to count
     *   }
     * })
    **/
    count<T extends LocalityCountArgs>(
      args?: Subset<T, LocalityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Locality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocalityAggregateArgs>(args: Subset<T, LocalityAggregateArgs>): Prisma.PrismaPromise<GetLocalityAggregateType<T>>

    /**
     * Group by Locality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocalityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalityGroupByArgs['orderBy'] }
        : { orderBy?: LocalityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocalityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Locality model
   */
  readonly fields: LocalityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Locality.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listings<T extends Locality$listingsArgs<ExtArgs> = {}>(args?: Subset<T, Locality$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Locality model
   */
  interface LocalityFieldRefs {
    readonly id: FieldRef<"Locality", 'String'>
    readonly name: FieldRef<"Locality", 'String'>
    readonly createdAt: FieldRef<"Locality", 'DateTime'>
    readonly updatedAt: FieldRef<"Locality", 'DateTime'>
    readonly slug: FieldRef<"Locality", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Locality findUnique
   */
  export type LocalityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locality
     */
    select?: LocalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locality
     */
    omit?: LocalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalityInclude<ExtArgs> | null
    /**
     * Filter, which Locality to fetch.
     */
    where: LocalityWhereUniqueInput
  }

  /**
   * Locality findUniqueOrThrow
   */
  export type LocalityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locality
     */
    select?: LocalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locality
     */
    omit?: LocalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalityInclude<ExtArgs> | null
    /**
     * Filter, which Locality to fetch.
     */
    where: LocalityWhereUniqueInput
  }

  /**
   * Locality findFirst
   */
  export type LocalityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locality
     */
    select?: LocalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locality
     */
    omit?: LocalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalityInclude<ExtArgs> | null
    /**
     * Filter, which Locality to fetch.
     */
    where?: LocalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localities to fetch.
     */
    orderBy?: LocalityOrderByWithRelationInput | LocalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localities.
     */
    cursor?: LocalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localities.
     */
    distinct?: LocalityScalarFieldEnum | LocalityScalarFieldEnum[]
  }

  /**
   * Locality findFirstOrThrow
   */
  export type LocalityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locality
     */
    select?: LocalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locality
     */
    omit?: LocalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalityInclude<ExtArgs> | null
    /**
     * Filter, which Locality to fetch.
     */
    where?: LocalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localities to fetch.
     */
    orderBy?: LocalityOrderByWithRelationInput | LocalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localities.
     */
    cursor?: LocalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localities.
     */
    distinct?: LocalityScalarFieldEnum | LocalityScalarFieldEnum[]
  }

  /**
   * Locality findMany
   */
  export type LocalityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locality
     */
    select?: LocalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locality
     */
    omit?: LocalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalityInclude<ExtArgs> | null
    /**
     * Filter, which Localities to fetch.
     */
    where?: LocalityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localities to fetch.
     */
    orderBy?: LocalityOrderByWithRelationInput | LocalityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Localities.
     */
    cursor?: LocalityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localities.
     */
    skip?: number
    distinct?: LocalityScalarFieldEnum | LocalityScalarFieldEnum[]
  }

  /**
   * Locality create
   */
  export type LocalityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locality
     */
    select?: LocalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locality
     */
    omit?: LocalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalityInclude<ExtArgs> | null
    /**
     * The data needed to create a Locality.
     */
    data: XOR<LocalityCreateInput, LocalityUncheckedCreateInput>
  }

  /**
   * Locality createMany
   */
  export type LocalityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Localities.
     */
    data: LocalityCreateManyInput | LocalityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Locality createManyAndReturn
   */
  export type LocalityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locality
     */
    select?: LocalitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Locality
     */
    omit?: LocalityOmit<ExtArgs> | null
    /**
     * The data used to create many Localities.
     */
    data: LocalityCreateManyInput | LocalityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Locality update
   */
  export type LocalityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locality
     */
    select?: LocalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locality
     */
    omit?: LocalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalityInclude<ExtArgs> | null
    /**
     * The data needed to update a Locality.
     */
    data: XOR<LocalityUpdateInput, LocalityUncheckedUpdateInput>
    /**
     * Choose, which Locality to update.
     */
    where: LocalityWhereUniqueInput
  }

  /**
   * Locality updateMany
   */
  export type LocalityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Localities.
     */
    data: XOR<LocalityUpdateManyMutationInput, LocalityUncheckedUpdateManyInput>
    /**
     * Filter which Localities to update
     */
    where?: LocalityWhereInput
    /**
     * Limit how many Localities to update.
     */
    limit?: number
  }

  /**
   * Locality updateManyAndReturn
   */
  export type LocalityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locality
     */
    select?: LocalitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Locality
     */
    omit?: LocalityOmit<ExtArgs> | null
    /**
     * The data used to update Localities.
     */
    data: XOR<LocalityUpdateManyMutationInput, LocalityUncheckedUpdateManyInput>
    /**
     * Filter which Localities to update
     */
    where?: LocalityWhereInput
    /**
     * Limit how many Localities to update.
     */
    limit?: number
  }

  /**
   * Locality upsert
   */
  export type LocalityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locality
     */
    select?: LocalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locality
     */
    omit?: LocalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalityInclude<ExtArgs> | null
    /**
     * The filter to search for the Locality to update in case it exists.
     */
    where: LocalityWhereUniqueInput
    /**
     * In case the Locality found by the `where` argument doesn't exist, create a new Locality with this data.
     */
    create: XOR<LocalityCreateInput, LocalityUncheckedCreateInput>
    /**
     * In case the Locality was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalityUpdateInput, LocalityUncheckedUpdateInput>
  }

  /**
   * Locality delete
   */
  export type LocalityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locality
     */
    select?: LocalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locality
     */
    omit?: LocalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalityInclude<ExtArgs> | null
    /**
     * Filter which Locality to delete.
     */
    where: LocalityWhereUniqueInput
  }

  /**
   * Locality deleteMany
   */
  export type LocalityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localities to delete
     */
    where?: LocalityWhereInput
    /**
     * Limit how many Localities to delete.
     */
    limit?: number
  }

  /**
   * Locality.listings
   */
  export type Locality$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listings
     */
    select?: ListingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listings
     */
    omit?: ListingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingsInclude<ExtArgs> | null
    where?: ListingsWhereInput
    orderBy?: ListingsOrderByWithRelationInput | ListingsOrderByWithRelationInput[]
    cursor?: ListingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingsScalarFieldEnum | ListingsScalarFieldEnum[]
  }

  /**
   * Locality without action
   */
  export type LocalityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locality
     */
    select?: LocalitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locality
     */
    omit?: LocalityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalityInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    authorId: string | null
    revieweeId: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    authorId: string | null
    revieweeId: string | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    createdAt: number
    authorId: number
    revieweeId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    createdAt?: true
    authorId?: true
    revieweeId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    createdAt?: true
    authorId?: true
    revieweeId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    createdAt?: true
    authorId?: true
    revieweeId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    rating: number
    comment: string | null
    createdAt: Date
    authorId: string
    revieweeId: string
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    authorId?: boolean
    revieweeId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    authorId?: boolean
    revieweeId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    authorId?: boolean
    revieweeId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    authorId?: boolean
    revieweeId?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "createdAt" | "authorId" | "revieweeId", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    reviewee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      reviewee: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number
      comment: string | null
      createdAt: Date
      authorId: string
      revieweeId: string
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly authorId: FieldRef<"Review", 'String'>
    readonly revieweeId: FieldRef<"Review", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Listings
   */

  export type AggregateListings = {
    _count: ListingsCountAggregateOutputType | null
    _avg: ListingsAvgAggregateOutputType | null
    _sum: ListingsSumAggregateOutputType | null
    _min: ListingsMinAggregateOutputType | null
    _max: ListingsMaxAggregateOutputType | null
  }

  export type ListingsAvgAggregateOutputType = {
    price: number | null
    maxGuestsInRoom: number | null
    totalBathrooms: number | null
    totalBedrooms: number | null
    totalOccupants: number | null
  }

  export type ListingsSumAggregateOutputType = {
    price: number | null
    maxGuestsInRoom: number | null
    totalBathrooms: number | null
    totalBedrooms: number | null
    totalOccupants: number | null
  }

  export type ListingsMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    street_name: string | null
    userId: string | null
    available_from: Date | null
    ensuite: boolean | null
    listingType: $Enums.ListingType | null
    maxGuestsInRoom: number | null
    totalBathrooms: number | null
    totalBedrooms: number | null
    totalOccupants: number | null
    localitySlug: string | null
    contactNumber: string | null
    contactNumberExtension: string | null
  }

  export type ListingsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    street_name: string | null
    userId: string | null
    available_from: Date | null
    ensuite: boolean | null
    listingType: $Enums.ListingType | null
    maxGuestsInRoom: number | null
    totalBathrooms: number | null
    totalBedrooms: number | null
    totalOccupants: number | null
    localitySlug: string | null
    contactNumber: string | null
    contactNumberExtension: string | null
  }

  export type ListingsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price: number
    createdAt: number
    updatedAt: number
    street_name: number
    userId: number
    images: number
    available_from: number
    ensuite: number
    listingType: number
    maxGuestsInRoom: number
    totalBathrooms: number
    totalBedrooms: number
    totalOccupants: number
    localitySlug: number
    contactNumber: number
    contactNumberExtension: number
    _all: number
  }


  export type ListingsAvgAggregateInputType = {
    price?: true
    maxGuestsInRoom?: true
    totalBathrooms?: true
    totalBedrooms?: true
    totalOccupants?: true
  }

  export type ListingsSumAggregateInputType = {
    price?: true
    maxGuestsInRoom?: true
    totalBathrooms?: true
    totalBedrooms?: true
    totalOccupants?: true
  }

  export type ListingsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    street_name?: true
    userId?: true
    available_from?: true
    ensuite?: true
    listingType?: true
    maxGuestsInRoom?: true
    totalBathrooms?: true
    totalBedrooms?: true
    totalOccupants?: true
    localitySlug?: true
    contactNumber?: true
    contactNumberExtension?: true
  }

  export type ListingsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    street_name?: true
    userId?: true
    available_from?: true
    ensuite?: true
    listingType?: true
    maxGuestsInRoom?: true
    totalBathrooms?: true
    totalBedrooms?: true
    totalOccupants?: true
    localitySlug?: true
    contactNumber?: true
    contactNumberExtension?: true
  }

  export type ListingsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    street_name?: true
    userId?: true
    images?: true
    available_from?: true
    ensuite?: true
    listingType?: true
    maxGuestsInRoom?: true
    totalBathrooms?: true
    totalBedrooms?: true
    totalOccupants?: true
    localitySlug?: true
    contactNumber?: true
    contactNumberExtension?: true
    _all?: true
  }

  export type ListingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listings to aggregate.
     */
    where?: ListingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingsOrderByWithRelationInput | ListingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Listings
    **/
    _count?: true | ListingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingsMaxAggregateInputType
  }

  export type GetListingsAggregateType<T extends ListingsAggregateArgs> = {
        [P in keyof T & keyof AggregateListings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListings[P]>
      : GetScalarType<T[P], AggregateListings[P]>
  }




  export type ListingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingsWhereInput
    orderBy?: ListingsOrderByWithAggregationInput | ListingsOrderByWithAggregationInput[]
    by: ListingsScalarFieldEnum[] | ListingsScalarFieldEnum
    having?: ListingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingsCountAggregateInputType | true
    _avg?: ListingsAvgAggregateInputType
    _sum?: ListingsSumAggregateInputType
    _min?: ListingsMinAggregateInputType
    _max?: ListingsMaxAggregateInputType
  }

  export type ListingsGroupByOutputType = {
    id: string
    title: string
    description: string | null
    price: number
    createdAt: Date
    updatedAt: Date
    street_name: string
    userId: string
    images: string[]
    available_from: Date
    ensuite: boolean
    listingType: $Enums.ListingType
    maxGuestsInRoom: number
    totalBathrooms: number
    totalBedrooms: number
    totalOccupants: number
    localitySlug: string
    contactNumber: string | null
    contactNumberExtension: string | null
    _count: ListingsCountAggregateOutputType | null
    _avg: ListingsAvgAggregateOutputType | null
    _sum: ListingsSumAggregateOutputType | null
    _min: ListingsMinAggregateOutputType | null
    _max: ListingsMaxAggregateOutputType | null
  }

  type GetListingsGroupByPayload<T extends ListingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingsGroupByOutputType[P]>
            : GetScalarType<T[P], ListingsGroupByOutputType[P]>
        }
      >
    >


  export type ListingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    street_name?: boolean
    userId?: boolean
    images?: boolean
    available_from?: boolean
    ensuite?: boolean
    listingType?: boolean
    maxGuestsInRoom?: boolean
    totalBathrooms?: boolean
    totalBedrooms?: boolean
    totalOccupants?: boolean
    localitySlug?: boolean
    contactNumber?: boolean
    contactNumberExtension?: boolean
    amenities?: boolean | Listings$amenitiesArgs<ExtArgs>
    locality?: boolean | LocalityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ListingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listings"]>

  export type ListingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    street_name?: boolean
    userId?: boolean
    images?: boolean
    available_from?: boolean
    ensuite?: boolean
    listingType?: boolean
    maxGuestsInRoom?: boolean
    totalBathrooms?: boolean
    totalBedrooms?: boolean
    totalOccupants?: boolean
    localitySlug?: boolean
    contactNumber?: boolean
    contactNumberExtension?: boolean
    locality?: boolean | LocalityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listings"]>

  export type ListingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    street_name?: boolean
    userId?: boolean
    images?: boolean
    available_from?: boolean
    ensuite?: boolean
    listingType?: boolean
    maxGuestsInRoom?: boolean
    totalBathrooms?: boolean
    totalBedrooms?: boolean
    totalOccupants?: boolean
    localitySlug?: boolean
    contactNumber?: boolean
    contactNumberExtension?: boolean
    locality?: boolean | LocalityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listings"]>

  export type ListingsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    street_name?: boolean
    userId?: boolean
    images?: boolean
    available_from?: boolean
    ensuite?: boolean
    listingType?: boolean
    maxGuestsInRoom?: boolean
    totalBathrooms?: boolean
    totalBedrooms?: boolean
    totalOccupants?: boolean
    localitySlug?: boolean
    contactNumber?: boolean
    contactNumberExtension?: boolean
  }

  export type ListingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "price" | "createdAt" | "updatedAt" | "street_name" | "userId" | "images" | "available_from" | "ensuite" | "listingType" | "maxGuestsInRoom" | "totalBathrooms" | "totalBedrooms" | "totalOccupants" | "localitySlug" | "contactNumber" | "contactNumberExtension", ExtArgs["result"]["listings"]>
  export type ListingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amenities?: boolean | Listings$amenitiesArgs<ExtArgs>
    locality?: boolean | LocalityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ListingsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locality?: boolean | LocalityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ListingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locality?: boolean | LocalityDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ListingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Listings"
    objects: {
      amenities: Prisma.$ListingAmenityPayload<ExtArgs>[]
      locality: Prisma.$LocalityPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      price: number
      createdAt: Date
      updatedAt: Date
      street_name: string
      userId: string
      images: string[]
      available_from: Date
      ensuite: boolean
      listingType: $Enums.ListingType
      maxGuestsInRoom: number
      totalBathrooms: number
      totalBedrooms: number
      totalOccupants: number
      localitySlug: string
      contactNumber: string | null
      contactNumberExtension: string | null
    }, ExtArgs["result"]["listings"]>
    composites: {}
  }

  type ListingsGetPayload<S extends boolean | null | undefined | ListingsDefaultArgs> = $Result.GetResult<Prisma.$ListingsPayload, S>

  type ListingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListingsCountAggregateInputType | true
    }

  export interface ListingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Listings'], meta: { name: 'Listings' } }
    /**
     * Find zero or one Listings that matches the filter.
     * @param {ListingsFindUniqueArgs} args - Arguments to find a Listings
     * @example
     * // Get one Listings
     * const listings = await prisma.listings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingsFindUniqueArgs>(args: SelectSubset<T, ListingsFindUniqueArgs<ExtArgs>>): Prisma__ListingsClient<$Result.GetResult<Prisma.$ListingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Listings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListingsFindUniqueOrThrowArgs} args - Arguments to find a Listings
     * @example
     * // Get one Listings
     * const listings = await prisma.listings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingsFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingsClient<$Result.GetResult<Prisma.$ListingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingsFindFirstArgs} args - Arguments to find a Listings
     * @example
     * // Get one Listings
     * const listings = await prisma.listings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingsFindFirstArgs>(args?: SelectSubset<T, ListingsFindFirstArgs<ExtArgs>>): Prisma__ListingsClient<$Result.GetResult<Prisma.$ListingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingsFindFirstOrThrowArgs} args - Arguments to find a Listings
     * @example
     * // Get one Listings
     * const listings = await prisma.listings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingsFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingsClient<$Result.GetResult<Prisma.$ListingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listings
     * const listings = await prisma.listings.findMany()
     * 
     * // Get first 10 Listings
     * const listings = await prisma.listings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingsWithIdOnly = await prisma.listings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListingsFindManyArgs>(args?: SelectSubset<T, ListingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Listings.
     * @param {ListingsCreateArgs} args - Arguments to create a Listings.
     * @example
     * // Create one Listings
     * const Listings = await prisma.listings.create({
     *   data: {
     *     // ... data to create a Listings
     *   }
     * })
     * 
     */
    create<T extends ListingsCreateArgs>(args: SelectSubset<T, ListingsCreateArgs<ExtArgs>>): Prisma__ListingsClient<$Result.GetResult<Prisma.$ListingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Listings.
     * @param {ListingsCreateManyArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listings = await prisma.listings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingsCreateManyArgs>(args?: SelectSubset<T, ListingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listings and returns the data saved in the database.
     * @param {ListingsCreateManyAndReturnArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listings = await prisma.listings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listings and only return the `id`
     * const listingsWithIdOnly = await prisma.listings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListingsCreateManyAndReturnArgs>(args?: SelectSubset<T, ListingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Listings.
     * @param {ListingsDeleteArgs} args - Arguments to delete one Listings.
     * @example
     * // Delete one Listings
     * const Listings = await prisma.listings.delete({
     *   where: {
     *     // ... filter to delete one Listings
     *   }
     * })
     * 
     */
    delete<T extends ListingsDeleteArgs>(args: SelectSubset<T, ListingsDeleteArgs<ExtArgs>>): Prisma__ListingsClient<$Result.GetResult<Prisma.$ListingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Listings.
     * @param {ListingsUpdateArgs} args - Arguments to update one Listings.
     * @example
     * // Update one Listings
     * const listings = await prisma.listings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingsUpdateArgs>(args: SelectSubset<T, ListingsUpdateArgs<ExtArgs>>): Prisma__ListingsClient<$Result.GetResult<Prisma.$ListingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Listings.
     * @param {ListingsDeleteManyArgs} args - Arguments to filter Listings to delete.
     * @example
     * // Delete a few Listings
     * const { count } = await prisma.listings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingsDeleteManyArgs>(args?: SelectSubset<T, ListingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listings
     * const listings = await prisma.listings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingsUpdateManyArgs>(args: SelectSubset<T, ListingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings and returns the data updated in the database.
     * @param {ListingsUpdateManyAndReturnArgs} args - Arguments to update many Listings.
     * @example
     * // Update many Listings
     * const listings = await prisma.listings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Listings and only return the `id`
     * const listingsWithIdOnly = await prisma.listings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListingsUpdateManyAndReturnArgs>(args: SelectSubset<T, ListingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Listings.
     * @param {ListingsUpsertArgs} args - Arguments to update or create a Listings.
     * @example
     * // Update or create a Listings
     * const listings = await prisma.listings.upsert({
     *   create: {
     *     // ... data to create a Listings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listings we want to update
     *   }
     * })
     */
    upsert<T extends ListingsUpsertArgs>(args: SelectSubset<T, ListingsUpsertArgs<ExtArgs>>): Prisma__ListingsClient<$Result.GetResult<Prisma.$ListingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingsCountArgs} args - Arguments to filter Listings to count.
     * @example
     * // Count the number of Listings
     * const count = await prisma.listings.count({
     *   where: {
     *     // ... the filter for the Listings we want to count
     *   }
     * })
    **/
    count<T extends ListingsCountArgs>(
      args?: Subset<T, ListingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListingsAggregateArgs>(args: Subset<T, ListingsAggregateArgs>): Prisma.PrismaPromise<GetListingsAggregateType<T>>

    /**
     * Group by Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingsGroupByArgs['orderBy'] }
        : { orderBy?: ListingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Listings model
   */
  readonly fields: ListingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Listings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    amenities<T extends Listings$amenitiesArgs<ExtArgs> = {}>(args?: Subset<T, Listings$amenitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    locality<T extends LocalityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocalityDefaultArgs<ExtArgs>>): Prisma__LocalityClient<$Result.GetResult<Prisma.$LocalityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Listings model
   */
  interface ListingsFieldRefs {
    readonly id: FieldRef<"Listings", 'String'>
    readonly title: FieldRef<"Listings", 'String'>
    readonly description: FieldRef<"Listings", 'String'>
    readonly price: FieldRef<"Listings", 'Float'>
    readonly createdAt: FieldRef<"Listings", 'DateTime'>
    readonly updatedAt: FieldRef<"Listings", 'DateTime'>
    readonly street_name: FieldRef<"Listings", 'String'>
    readonly userId: FieldRef<"Listings", 'String'>
    readonly images: FieldRef<"Listings", 'String[]'>
    readonly available_from: FieldRef<"Listings", 'DateTime'>
    readonly ensuite: FieldRef<"Listings", 'Boolean'>
    readonly listingType: FieldRef<"Listings", 'ListingType'>
    readonly maxGuestsInRoom: FieldRef<"Listings", 'Int'>
    readonly totalBathrooms: FieldRef<"Listings", 'Int'>
    readonly totalBedrooms: FieldRef<"Listings", 'Int'>
    readonly totalOccupants: FieldRef<"Listings", 'Int'>
    readonly localitySlug: FieldRef<"Listings", 'String'>
    readonly contactNumber: FieldRef<"Listings", 'String'>
    readonly contactNumberExtension: FieldRef<"Listings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Listings findUnique
   */
  export type ListingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listings
     */
    select?: ListingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listings
     */
    omit?: ListingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingsInclude<ExtArgs> | null
    /**
     * Filter, which Listings to fetch.
     */
    where: ListingsWhereUniqueInput
  }

  /**
   * Listings findUniqueOrThrow
   */
  export type ListingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listings
     */
    select?: ListingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listings
     */
    omit?: ListingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingsInclude<ExtArgs> | null
    /**
     * Filter, which Listings to fetch.
     */
    where: ListingsWhereUniqueInput
  }

  /**
   * Listings findFirst
   */
  export type ListingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listings
     */
    select?: ListingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listings
     */
    omit?: ListingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingsInclude<ExtArgs> | null
    /**
     * Filter, which Listings to fetch.
     */
    where?: ListingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingsOrderByWithRelationInput | ListingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingsScalarFieldEnum | ListingsScalarFieldEnum[]
  }

  /**
   * Listings findFirstOrThrow
   */
  export type ListingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listings
     */
    select?: ListingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listings
     */
    omit?: ListingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingsInclude<ExtArgs> | null
    /**
     * Filter, which Listings to fetch.
     */
    where?: ListingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingsOrderByWithRelationInput | ListingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingsScalarFieldEnum | ListingsScalarFieldEnum[]
  }

  /**
   * Listings findMany
   */
  export type ListingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listings
     */
    select?: ListingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listings
     */
    omit?: ListingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingsInclude<ExtArgs> | null
    /**
     * Filter, which Listings to fetch.
     */
    where?: ListingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingsOrderByWithRelationInput | ListingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Listings.
     */
    cursor?: ListingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    distinct?: ListingsScalarFieldEnum | ListingsScalarFieldEnum[]
  }

  /**
   * Listings create
   */
  export type ListingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listings
     */
    select?: ListingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listings
     */
    omit?: ListingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Listings.
     */
    data: XOR<ListingsCreateInput, ListingsUncheckedCreateInput>
  }

  /**
   * Listings createMany
   */
  export type ListingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Listings.
     */
    data: ListingsCreateManyInput | ListingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Listings createManyAndReturn
   */
  export type ListingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listings
     */
    select?: ListingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listings
     */
    omit?: ListingsOmit<ExtArgs> | null
    /**
     * The data used to create many Listings.
     */
    data: ListingsCreateManyInput | ListingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listings update
   */
  export type ListingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listings
     */
    select?: ListingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listings
     */
    omit?: ListingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Listings.
     */
    data: XOR<ListingsUpdateInput, ListingsUncheckedUpdateInput>
    /**
     * Choose, which Listings to update.
     */
    where: ListingsWhereUniqueInput
  }

  /**
   * Listings updateMany
   */
  export type ListingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingsUpdateManyMutationInput, ListingsUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingsWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
  }

  /**
   * Listings updateManyAndReturn
   */
  export type ListingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listings
     */
    select?: ListingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listings
     */
    omit?: ListingsOmit<ExtArgs> | null
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingsUpdateManyMutationInput, ListingsUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingsWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listings upsert
   */
  export type ListingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listings
     */
    select?: ListingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listings
     */
    omit?: ListingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Listings to update in case it exists.
     */
    where: ListingsWhereUniqueInput
    /**
     * In case the Listings found by the `where` argument doesn't exist, create a new Listings with this data.
     */
    create: XOR<ListingsCreateInput, ListingsUncheckedCreateInput>
    /**
     * In case the Listings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingsUpdateInput, ListingsUncheckedUpdateInput>
  }

  /**
   * Listings delete
   */
  export type ListingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listings
     */
    select?: ListingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listings
     */
    omit?: ListingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingsInclude<ExtArgs> | null
    /**
     * Filter which Listings to delete.
     */
    where: ListingsWhereUniqueInput
  }

  /**
   * Listings deleteMany
   */
  export type ListingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listings to delete
     */
    where?: ListingsWhereInput
    /**
     * Limit how many Listings to delete.
     */
    limit?: number
  }

  /**
   * Listings.amenities
   */
  export type Listings$amenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingAmenity
     */
    select?: ListingAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingAmenity
     */
    omit?: ListingAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingAmenityInclude<ExtArgs> | null
    where?: ListingAmenityWhereInput
    orderBy?: ListingAmenityOrderByWithRelationInput | ListingAmenityOrderByWithRelationInput[]
    cursor?: ListingAmenityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingAmenityScalarFieldEnum | ListingAmenityScalarFieldEnum[]
  }

  /**
   * Listings without action
   */
  export type ListingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listings
     */
    select?: ListingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listings
     */
    omit?: ListingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingsInclude<ExtArgs> | null
  }


  /**
   * Model Amenity
   */

  export type AggregateAmenity = {
    _count: AmenityCountAggregateOutputType | null
    _avg: AmenityAvgAggregateOutputType | null
    _sum: AmenitySumAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  export type AmenityAvgAggregateOutputType = {
    id: number | null
  }

  export type AmenitySumAggregateOutputType = {
    id: number | null
  }

  export type AmenityMinAggregateOutputType = {
    slug: string | null
    label: string | null
    id: number | null
  }

  export type AmenityMaxAggregateOutputType = {
    slug: string | null
    label: string | null
    id: number | null
  }

  export type AmenityCountAggregateOutputType = {
    slug: number
    label: number
    id: number
    _all: number
  }


  export type AmenityAvgAggregateInputType = {
    id?: true
  }

  export type AmenitySumAggregateInputType = {
    id?: true
  }

  export type AmenityMinAggregateInputType = {
    slug?: true
    label?: true
    id?: true
  }

  export type AmenityMaxAggregateInputType = {
    slug?: true
    label?: true
    id?: true
  }

  export type AmenityCountAggregateInputType = {
    slug?: true
    label?: true
    id?: true
    _all?: true
  }

  export type AmenityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenity to aggregate.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Amenities
    **/
    _count?: true | AmenityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmenityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmenitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmenityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmenityMaxAggregateInputType
  }

  export type GetAmenityAggregateType<T extends AmenityAggregateArgs> = {
        [P in keyof T & keyof AggregateAmenity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmenity[P]>
      : GetScalarType<T[P], AggregateAmenity[P]>
  }




  export type AmenityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmenityWhereInput
    orderBy?: AmenityOrderByWithAggregationInput | AmenityOrderByWithAggregationInput[]
    by: AmenityScalarFieldEnum[] | AmenityScalarFieldEnum
    having?: AmenityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmenityCountAggregateInputType | true
    _avg?: AmenityAvgAggregateInputType
    _sum?: AmenitySumAggregateInputType
    _min?: AmenityMinAggregateInputType
    _max?: AmenityMaxAggregateInputType
  }

  export type AmenityGroupByOutputType = {
    slug: string
    label: string
    id: number
    _count: AmenityCountAggregateOutputType | null
    _avg: AmenityAvgAggregateOutputType | null
    _sum: AmenitySumAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  type GetAmenityGroupByPayload<T extends AmenityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmenityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmenityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmenityGroupByOutputType[P]>
            : GetScalarType<T[P], AmenityGroupByOutputType[P]>
        }
      >
    >


  export type AmenitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    label?: boolean
    id?: boolean
    listings?: boolean | Amenity$listingsArgs<ExtArgs>
    _count?: boolean | AmenityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    label?: boolean
    id?: boolean
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    label?: boolean
    id?: boolean
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectScalar = {
    slug?: boolean
    label?: boolean
    id?: boolean
  }

  export type AmenityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"slug" | "label" | "id", ExtArgs["result"]["amenity"]>
  export type AmenityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | Amenity$listingsArgs<ExtArgs>
    _count?: boolean | AmenityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AmenityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AmenityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AmenityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Amenity"
    objects: {
      listings: Prisma.$ListingAmenityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      slug: string
      label: string
      id: number
    }, ExtArgs["result"]["amenity"]>
    composites: {}
  }

  type AmenityGetPayload<S extends boolean | null | undefined | AmenityDefaultArgs> = $Result.GetResult<Prisma.$AmenityPayload, S>

  type AmenityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmenityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmenityCountAggregateInputType | true
    }

  export interface AmenityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Amenity'], meta: { name: 'Amenity' } }
    /**
     * Find zero or one Amenity that matches the filter.
     * @param {AmenityFindUniqueArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmenityFindUniqueArgs>(args: SelectSubset<T, AmenityFindUniqueArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Amenity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmenityFindUniqueOrThrowArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmenityFindUniqueOrThrowArgs>(args: SelectSubset<T, AmenityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amenity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindFirstArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmenityFindFirstArgs>(args?: SelectSubset<T, AmenityFindFirstArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amenity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindFirstOrThrowArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmenityFindFirstOrThrowArgs>(args?: SelectSubset<T, AmenityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Amenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Amenities
     * const amenities = await prisma.amenity.findMany()
     * 
     * // Get first 10 Amenities
     * const amenities = await prisma.amenity.findMany({ take: 10 })
     * 
     * // Only select the `slug`
     * const amenityWithSlugOnly = await prisma.amenity.findMany({ select: { slug: true } })
     * 
     */
    findMany<T extends AmenityFindManyArgs>(args?: SelectSubset<T, AmenityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Amenity.
     * @param {AmenityCreateArgs} args - Arguments to create a Amenity.
     * @example
     * // Create one Amenity
     * const Amenity = await prisma.amenity.create({
     *   data: {
     *     // ... data to create a Amenity
     *   }
     * })
     * 
     */
    create<T extends AmenityCreateArgs>(args: SelectSubset<T, AmenityCreateArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Amenities.
     * @param {AmenityCreateManyArgs} args - Arguments to create many Amenities.
     * @example
     * // Create many Amenities
     * const amenity = await prisma.amenity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmenityCreateManyArgs>(args?: SelectSubset<T, AmenityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Amenities and returns the data saved in the database.
     * @param {AmenityCreateManyAndReturnArgs} args - Arguments to create many Amenities.
     * @example
     * // Create many Amenities
     * const amenity = await prisma.amenity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Amenities and only return the `slug`
     * const amenityWithSlugOnly = await prisma.amenity.createManyAndReturn({
     *   select: { slug: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmenityCreateManyAndReturnArgs>(args?: SelectSubset<T, AmenityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Amenity.
     * @param {AmenityDeleteArgs} args - Arguments to delete one Amenity.
     * @example
     * // Delete one Amenity
     * const Amenity = await prisma.amenity.delete({
     *   where: {
     *     // ... filter to delete one Amenity
     *   }
     * })
     * 
     */
    delete<T extends AmenityDeleteArgs>(args: SelectSubset<T, AmenityDeleteArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Amenity.
     * @param {AmenityUpdateArgs} args - Arguments to update one Amenity.
     * @example
     * // Update one Amenity
     * const amenity = await prisma.amenity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmenityUpdateArgs>(args: SelectSubset<T, AmenityUpdateArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Amenities.
     * @param {AmenityDeleteManyArgs} args - Arguments to filter Amenities to delete.
     * @example
     * // Delete a few Amenities
     * const { count } = await prisma.amenity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmenityDeleteManyArgs>(args?: SelectSubset<T, AmenityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Amenities
     * const amenity = await prisma.amenity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmenityUpdateManyArgs>(args: SelectSubset<T, AmenityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amenities and returns the data updated in the database.
     * @param {AmenityUpdateManyAndReturnArgs} args - Arguments to update many Amenities.
     * @example
     * // Update many Amenities
     * const amenity = await prisma.amenity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Amenities and only return the `slug`
     * const amenityWithSlugOnly = await prisma.amenity.updateManyAndReturn({
     *   select: { slug: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AmenityUpdateManyAndReturnArgs>(args: SelectSubset<T, AmenityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Amenity.
     * @param {AmenityUpsertArgs} args - Arguments to update or create a Amenity.
     * @example
     * // Update or create a Amenity
     * const amenity = await prisma.amenity.upsert({
     *   create: {
     *     // ... data to create a Amenity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Amenity we want to update
     *   }
     * })
     */
    upsert<T extends AmenityUpsertArgs>(args: SelectSubset<T, AmenityUpsertArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityCountArgs} args - Arguments to filter Amenities to count.
     * @example
     * // Count the number of Amenities
     * const count = await prisma.amenity.count({
     *   where: {
     *     // ... the filter for the Amenities we want to count
     *   }
     * })
    **/
    count<T extends AmenityCountArgs>(
      args?: Subset<T, AmenityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmenityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AmenityAggregateArgs>(args: Subset<T, AmenityAggregateArgs>): Prisma.PrismaPromise<GetAmenityAggregateType<T>>

    /**
     * Group by Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AmenityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmenityGroupByArgs['orderBy'] }
        : { orderBy?: AmenityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AmenityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmenityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Amenity model
   */
  readonly fields: AmenityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Amenity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmenityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listings<T extends Amenity$listingsArgs<ExtArgs> = {}>(args?: Subset<T, Amenity$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Amenity model
   */
  interface AmenityFieldRefs {
    readonly slug: FieldRef<"Amenity", 'String'>
    readonly label: FieldRef<"Amenity", 'String'>
    readonly id: FieldRef<"Amenity", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Amenity findUnique
   */
  export type AmenityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity findUniqueOrThrow
   */
  export type AmenityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity findFirst
   */
  export type AmenityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity findFirstOrThrow
   */
  export type AmenityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity findMany
   */
  export type AmenityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenities to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity create
   */
  export type AmenityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The data needed to create a Amenity.
     */
    data: XOR<AmenityCreateInput, AmenityUncheckedCreateInput>
  }

  /**
   * Amenity createMany
   */
  export type AmenityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Amenities.
     */
    data: AmenityCreateManyInput | AmenityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Amenity createManyAndReturn
   */
  export type AmenityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * The data used to create many Amenities.
     */
    data: AmenityCreateManyInput | AmenityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Amenity update
   */
  export type AmenityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The data needed to update a Amenity.
     */
    data: XOR<AmenityUpdateInput, AmenityUncheckedUpdateInput>
    /**
     * Choose, which Amenity to update.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity updateMany
   */
  export type AmenityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Amenities.
     */
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyInput>
    /**
     * Filter which Amenities to update
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to update.
     */
    limit?: number
  }

  /**
   * Amenity updateManyAndReturn
   */
  export type AmenityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * The data used to update Amenities.
     */
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyInput>
    /**
     * Filter which Amenities to update
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to update.
     */
    limit?: number
  }

  /**
   * Amenity upsert
   */
  export type AmenityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The filter to search for the Amenity to update in case it exists.
     */
    where: AmenityWhereUniqueInput
    /**
     * In case the Amenity found by the `where` argument doesn't exist, create a new Amenity with this data.
     */
    create: XOR<AmenityCreateInput, AmenityUncheckedCreateInput>
    /**
     * In case the Amenity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmenityUpdateInput, AmenityUncheckedUpdateInput>
  }

  /**
   * Amenity delete
   */
  export type AmenityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter which Amenity to delete.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity deleteMany
   */
  export type AmenityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenities to delete
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to delete.
     */
    limit?: number
  }

  /**
   * Amenity.listings
   */
  export type Amenity$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingAmenity
     */
    select?: ListingAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingAmenity
     */
    omit?: ListingAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingAmenityInclude<ExtArgs> | null
    where?: ListingAmenityWhereInput
    orderBy?: ListingAmenityOrderByWithRelationInput | ListingAmenityOrderByWithRelationInput[]
    cursor?: ListingAmenityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingAmenityScalarFieldEnum | ListingAmenityScalarFieldEnum[]
  }

  /**
   * Amenity without action
   */
  export type AmenityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
  }


  /**
   * Model ListingAmenity
   */

  export type AggregateListingAmenity = {
    _count: ListingAmenityCountAggregateOutputType | null
    _avg: ListingAmenityAvgAggregateOutputType | null
    _sum: ListingAmenitySumAggregateOutputType | null
    _min: ListingAmenityMinAggregateOutputType | null
    _max: ListingAmenityMaxAggregateOutputType | null
  }

  export type ListingAmenityAvgAggregateOutputType = {
    amenityId: number | null
  }

  export type ListingAmenitySumAggregateOutputType = {
    amenityId: number | null
  }

  export type ListingAmenityMinAggregateOutputType = {
    listingId: string | null
    amenityId: number | null
  }

  export type ListingAmenityMaxAggregateOutputType = {
    listingId: string | null
    amenityId: number | null
  }

  export type ListingAmenityCountAggregateOutputType = {
    listingId: number
    amenityId: number
    _all: number
  }


  export type ListingAmenityAvgAggregateInputType = {
    amenityId?: true
  }

  export type ListingAmenitySumAggregateInputType = {
    amenityId?: true
  }

  export type ListingAmenityMinAggregateInputType = {
    listingId?: true
    amenityId?: true
  }

  export type ListingAmenityMaxAggregateInputType = {
    listingId?: true
    amenityId?: true
  }

  export type ListingAmenityCountAggregateInputType = {
    listingId?: true
    amenityId?: true
    _all?: true
  }

  export type ListingAmenityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListingAmenity to aggregate.
     */
    where?: ListingAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingAmenities to fetch.
     */
    orderBy?: ListingAmenityOrderByWithRelationInput | ListingAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListingAmenities
    **/
    _count?: true | ListingAmenityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingAmenityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingAmenitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingAmenityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingAmenityMaxAggregateInputType
  }

  export type GetListingAmenityAggregateType<T extends ListingAmenityAggregateArgs> = {
        [P in keyof T & keyof AggregateListingAmenity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListingAmenity[P]>
      : GetScalarType<T[P], AggregateListingAmenity[P]>
  }




  export type ListingAmenityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingAmenityWhereInput
    orderBy?: ListingAmenityOrderByWithAggregationInput | ListingAmenityOrderByWithAggregationInput[]
    by: ListingAmenityScalarFieldEnum[] | ListingAmenityScalarFieldEnum
    having?: ListingAmenityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingAmenityCountAggregateInputType | true
    _avg?: ListingAmenityAvgAggregateInputType
    _sum?: ListingAmenitySumAggregateInputType
    _min?: ListingAmenityMinAggregateInputType
    _max?: ListingAmenityMaxAggregateInputType
  }

  export type ListingAmenityGroupByOutputType = {
    listingId: string
    amenityId: number
    _count: ListingAmenityCountAggregateOutputType | null
    _avg: ListingAmenityAvgAggregateOutputType | null
    _sum: ListingAmenitySumAggregateOutputType | null
    _min: ListingAmenityMinAggregateOutputType | null
    _max: ListingAmenityMaxAggregateOutputType | null
  }

  type GetListingAmenityGroupByPayload<T extends ListingAmenityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingAmenityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingAmenityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingAmenityGroupByOutputType[P]>
            : GetScalarType<T[P], ListingAmenityGroupByOutputType[P]>
        }
      >
    >


  export type ListingAmenitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    listingId?: boolean
    amenityId?: boolean
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
    listing?: boolean | ListingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listingAmenity"]>

  export type ListingAmenitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    listingId?: boolean
    amenityId?: boolean
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
    listing?: boolean | ListingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listingAmenity"]>

  export type ListingAmenitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    listingId?: boolean
    amenityId?: boolean
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
    listing?: boolean | ListingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listingAmenity"]>

  export type ListingAmenitySelectScalar = {
    listingId?: boolean
    amenityId?: boolean
  }

  export type ListingAmenityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"listingId" | "amenityId", ExtArgs["result"]["listingAmenity"]>
  export type ListingAmenityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
    listing?: boolean | ListingsDefaultArgs<ExtArgs>
  }
  export type ListingAmenityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
    listing?: boolean | ListingsDefaultArgs<ExtArgs>
  }
  export type ListingAmenityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
    listing?: boolean | ListingsDefaultArgs<ExtArgs>
  }

  export type $ListingAmenityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListingAmenity"
    objects: {
      amenity: Prisma.$AmenityPayload<ExtArgs>
      listing: Prisma.$ListingsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      listingId: string
      amenityId: number
    }, ExtArgs["result"]["listingAmenity"]>
    composites: {}
  }

  type ListingAmenityGetPayload<S extends boolean | null | undefined | ListingAmenityDefaultArgs> = $Result.GetResult<Prisma.$ListingAmenityPayload, S>

  type ListingAmenityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListingAmenityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListingAmenityCountAggregateInputType | true
    }

  export interface ListingAmenityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListingAmenity'], meta: { name: 'ListingAmenity' } }
    /**
     * Find zero or one ListingAmenity that matches the filter.
     * @param {ListingAmenityFindUniqueArgs} args - Arguments to find a ListingAmenity
     * @example
     * // Get one ListingAmenity
     * const listingAmenity = await prisma.listingAmenity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingAmenityFindUniqueArgs>(args: SelectSubset<T, ListingAmenityFindUniqueArgs<ExtArgs>>): Prisma__ListingAmenityClient<$Result.GetResult<Prisma.$ListingAmenityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListingAmenity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListingAmenityFindUniqueOrThrowArgs} args - Arguments to find a ListingAmenity
     * @example
     * // Get one ListingAmenity
     * const listingAmenity = await prisma.listingAmenity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingAmenityFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingAmenityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingAmenityClient<$Result.GetResult<Prisma.$ListingAmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListingAmenity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAmenityFindFirstArgs} args - Arguments to find a ListingAmenity
     * @example
     * // Get one ListingAmenity
     * const listingAmenity = await prisma.listingAmenity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingAmenityFindFirstArgs>(args?: SelectSubset<T, ListingAmenityFindFirstArgs<ExtArgs>>): Prisma__ListingAmenityClient<$Result.GetResult<Prisma.$ListingAmenityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListingAmenity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAmenityFindFirstOrThrowArgs} args - Arguments to find a ListingAmenity
     * @example
     * // Get one ListingAmenity
     * const listingAmenity = await prisma.listingAmenity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingAmenityFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingAmenityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingAmenityClient<$Result.GetResult<Prisma.$ListingAmenityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListingAmenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAmenityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListingAmenities
     * const listingAmenities = await prisma.listingAmenity.findMany()
     * 
     * // Get first 10 ListingAmenities
     * const listingAmenities = await prisma.listingAmenity.findMany({ take: 10 })
     * 
     * // Only select the `listingId`
     * const listingAmenityWithListingIdOnly = await prisma.listingAmenity.findMany({ select: { listingId: true } })
     * 
     */
    findMany<T extends ListingAmenityFindManyArgs>(args?: SelectSubset<T, ListingAmenityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListingAmenity.
     * @param {ListingAmenityCreateArgs} args - Arguments to create a ListingAmenity.
     * @example
     * // Create one ListingAmenity
     * const ListingAmenity = await prisma.listingAmenity.create({
     *   data: {
     *     // ... data to create a ListingAmenity
     *   }
     * })
     * 
     */
    create<T extends ListingAmenityCreateArgs>(args: SelectSubset<T, ListingAmenityCreateArgs<ExtArgs>>): Prisma__ListingAmenityClient<$Result.GetResult<Prisma.$ListingAmenityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListingAmenities.
     * @param {ListingAmenityCreateManyArgs} args - Arguments to create many ListingAmenities.
     * @example
     * // Create many ListingAmenities
     * const listingAmenity = await prisma.listingAmenity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingAmenityCreateManyArgs>(args?: SelectSubset<T, ListingAmenityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListingAmenities and returns the data saved in the database.
     * @param {ListingAmenityCreateManyAndReturnArgs} args - Arguments to create many ListingAmenities.
     * @example
     * // Create many ListingAmenities
     * const listingAmenity = await prisma.listingAmenity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListingAmenities and only return the `listingId`
     * const listingAmenityWithListingIdOnly = await prisma.listingAmenity.createManyAndReturn({
     *   select: { listingId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListingAmenityCreateManyAndReturnArgs>(args?: SelectSubset<T, ListingAmenityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingAmenityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListingAmenity.
     * @param {ListingAmenityDeleteArgs} args - Arguments to delete one ListingAmenity.
     * @example
     * // Delete one ListingAmenity
     * const ListingAmenity = await prisma.listingAmenity.delete({
     *   where: {
     *     // ... filter to delete one ListingAmenity
     *   }
     * })
     * 
     */
    delete<T extends ListingAmenityDeleteArgs>(args: SelectSubset<T, ListingAmenityDeleteArgs<ExtArgs>>): Prisma__ListingAmenityClient<$Result.GetResult<Prisma.$ListingAmenityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListingAmenity.
     * @param {ListingAmenityUpdateArgs} args - Arguments to update one ListingAmenity.
     * @example
     * // Update one ListingAmenity
     * const listingAmenity = await prisma.listingAmenity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingAmenityUpdateArgs>(args: SelectSubset<T, ListingAmenityUpdateArgs<ExtArgs>>): Prisma__ListingAmenityClient<$Result.GetResult<Prisma.$ListingAmenityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListingAmenities.
     * @param {ListingAmenityDeleteManyArgs} args - Arguments to filter ListingAmenities to delete.
     * @example
     * // Delete a few ListingAmenities
     * const { count } = await prisma.listingAmenity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingAmenityDeleteManyArgs>(args?: SelectSubset<T, ListingAmenityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListingAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAmenityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListingAmenities
     * const listingAmenity = await prisma.listingAmenity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingAmenityUpdateManyArgs>(args: SelectSubset<T, ListingAmenityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListingAmenities and returns the data updated in the database.
     * @param {ListingAmenityUpdateManyAndReturnArgs} args - Arguments to update many ListingAmenities.
     * @example
     * // Update many ListingAmenities
     * const listingAmenity = await prisma.listingAmenity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListingAmenities and only return the `listingId`
     * const listingAmenityWithListingIdOnly = await prisma.listingAmenity.updateManyAndReturn({
     *   select: { listingId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListingAmenityUpdateManyAndReturnArgs>(args: SelectSubset<T, ListingAmenityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingAmenityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListingAmenity.
     * @param {ListingAmenityUpsertArgs} args - Arguments to update or create a ListingAmenity.
     * @example
     * // Update or create a ListingAmenity
     * const listingAmenity = await prisma.listingAmenity.upsert({
     *   create: {
     *     // ... data to create a ListingAmenity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListingAmenity we want to update
     *   }
     * })
     */
    upsert<T extends ListingAmenityUpsertArgs>(args: SelectSubset<T, ListingAmenityUpsertArgs<ExtArgs>>): Prisma__ListingAmenityClient<$Result.GetResult<Prisma.$ListingAmenityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListingAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAmenityCountArgs} args - Arguments to filter ListingAmenities to count.
     * @example
     * // Count the number of ListingAmenities
     * const count = await prisma.listingAmenity.count({
     *   where: {
     *     // ... the filter for the ListingAmenities we want to count
     *   }
     * })
    **/
    count<T extends ListingAmenityCountArgs>(
      args?: Subset<T, ListingAmenityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingAmenityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListingAmenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAmenityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListingAmenityAggregateArgs>(args: Subset<T, ListingAmenityAggregateArgs>): Prisma.PrismaPromise<GetListingAmenityAggregateType<T>>

    /**
     * Group by ListingAmenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAmenityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListingAmenityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingAmenityGroupByArgs['orderBy'] }
        : { orderBy?: ListingAmenityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListingAmenityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingAmenityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListingAmenity model
   */
  readonly fields: ListingAmenityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListingAmenity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingAmenityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    amenity<T extends AmenityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AmenityDefaultArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    listing<T extends ListingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingsDefaultArgs<ExtArgs>>): Prisma__ListingsClient<$Result.GetResult<Prisma.$ListingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ListingAmenity model
   */
  interface ListingAmenityFieldRefs {
    readonly listingId: FieldRef<"ListingAmenity", 'String'>
    readonly amenityId: FieldRef<"ListingAmenity", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ListingAmenity findUnique
   */
  export type ListingAmenityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingAmenity
     */
    select?: ListingAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingAmenity
     */
    omit?: ListingAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingAmenityInclude<ExtArgs> | null
    /**
     * Filter, which ListingAmenity to fetch.
     */
    where: ListingAmenityWhereUniqueInput
  }

  /**
   * ListingAmenity findUniqueOrThrow
   */
  export type ListingAmenityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingAmenity
     */
    select?: ListingAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingAmenity
     */
    omit?: ListingAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingAmenityInclude<ExtArgs> | null
    /**
     * Filter, which ListingAmenity to fetch.
     */
    where: ListingAmenityWhereUniqueInput
  }

  /**
   * ListingAmenity findFirst
   */
  export type ListingAmenityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingAmenity
     */
    select?: ListingAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingAmenity
     */
    omit?: ListingAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingAmenityInclude<ExtArgs> | null
    /**
     * Filter, which ListingAmenity to fetch.
     */
    where?: ListingAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingAmenities to fetch.
     */
    orderBy?: ListingAmenityOrderByWithRelationInput | ListingAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListingAmenities.
     */
    cursor?: ListingAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListingAmenities.
     */
    distinct?: ListingAmenityScalarFieldEnum | ListingAmenityScalarFieldEnum[]
  }

  /**
   * ListingAmenity findFirstOrThrow
   */
  export type ListingAmenityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingAmenity
     */
    select?: ListingAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingAmenity
     */
    omit?: ListingAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingAmenityInclude<ExtArgs> | null
    /**
     * Filter, which ListingAmenity to fetch.
     */
    where?: ListingAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingAmenities to fetch.
     */
    orderBy?: ListingAmenityOrderByWithRelationInput | ListingAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListingAmenities.
     */
    cursor?: ListingAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListingAmenities.
     */
    distinct?: ListingAmenityScalarFieldEnum | ListingAmenityScalarFieldEnum[]
  }

  /**
   * ListingAmenity findMany
   */
  export type ListingAmenityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingAmenity
     */
    select?: ListingAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingAmenity
     */
    omit?: ListingAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingAmenityInclude<ExtArgs> | null
    /**
     * Filter, which ListingAmenities to fetch.
     */
    where?: ListingAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListingAmenities to fetch.
     */
    orderBy?: ListingAmenityOrderByWithRelationInput | ListingAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListingAmenities.
     */
    cursor?: ListingAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListingAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListingAmenities.
     */
    skip?: number
    distinct?: ListingAmenityScalarFieldEnum | ListingAmenityScalarFieldEnum[]
  }

  /**
   * ListingAmenity create
   */
  export type ListingAmenityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingAmenity
     */
    select?: ListingAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingAmenity
     */
    omit?: ListingAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingAmenityInclude<ExtArgs> | null
    /**
     * The data needed to create a ListingAmenity.
     */
    data: XOR<ListingAmenityCreateInput, ListingAmenityUncheckedCreateInput>
  }

  /**
   * ListingAmenity createMany
   */
  export type ListingAmenityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListingAmenities.
     */
    data: ListingAmenityCreateManyInput | ListingAmenityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListingAmenity createManyAndReturn
   */
  export type ListingAmenityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingAmenity
     */
    select?: ListingAmenitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListingAmenity
     */
    omit?: ListingAmenityOmit<ExtArgs> | null
    /**
     * The data used to create many ListingAmenities.
     */
    data: ListingAmenityCreateManyInput | ListingAmenityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingAmenityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListingAmenity update
   */
  export type ListingAmenityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingAmenity
     */
    select?: ListingAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingAmenity
     */
    omit?: ListingAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingAmenityInclude<ExtArgs> | null
    /**
     * The data needed to update a ListingAmenity.
     */
    data: XOR<ListingAmenityUpdateInput, ListingAmenityUncheckedUpdateInput>
    /**
     * Choose, which ListingAmenity to update.
     */
    where: ListingAmenityWhereUniqueInput
  }

  /**
   * ListingAmenity updateMany
   */
  export type ListingAmenityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListingAmenities.
     */
    data: XOR<ListingAmenityUpdateManyMutationInput, ListingAmenityUncheckedUpdateManyInput>
    /**
     * Filter which ListingAmenities to update
     */
    where?: ListingAmenityWhereInput
    /**
     * Limit how many ListingAmenities to update.
     */
    limit?: number
  }

  /**
   * ListingAmenity updateManyAndReturn
   */
  export type ListingAmenityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingAmenity
     */
    select?: ListingAmenitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListingAmenity
     */
    omit?: ListingAmenityOmit<ExtArgs> | null
    /**
     * The data used to update ListingAmenities.
     */
    data: XOR<ListingAmenityUpdateManyMutationInput, ListingAmenityUncheckedUpdateManyInput>
    /**
     * Filter which ListingAmenities to update
     */
    where?: ListingAmenityWhereInput
    /**
     * Limit how many ListingAmenities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingAmenityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListingAmenity upsert
   */
  export type ListingAmenityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingAmenity
     */
    select?: ListingAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingAmenity
     */
    omit?: ListingAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingAmenityInclude<ExtArgs> | null
    /**
     * The filter to search for the ListingAmenity to update in case it exists.
     */
    where: ListingAmenityWhereUniqueInput
    /**
     * In case the ListingAmenity found by the `where` argument doesn't exist, create a new ListingAmenity with this data.
     */
    create: XOR<ListingAmenityCreateInput, ListingAmenityUncheckedCreateInput>
    /**
     * In case the ListingAmenity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingAmenityUpdateInput, ListingAmenityUncheckedUpdateInput>
  }

  /**
   * ListingAmenity delete
   */
  export type ListingAmenityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingAmenity
     */
    select?: ListingAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingAmenity
     */
    omit?: ListingAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingAmenityInclude<ExtArgs> | null
    /**
     * Filter which ListingAmenity to delete.
     */
    where: ListingAmenityWhereUniqueInput
  }

  /**
   * ListingAmenity deleteMany
   */
  export type ListingAmenityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListingAmenities to delete
     */
    where?: ListingAmenityWhereInput
    /**
     * Limit how many ListingAmenities to delete.
     */
    limit?: number
  }

  /**
   * ListingAmenity without action
   */
  export type ListingAmenityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingAmenity
     */
    select?: ListingAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListingAmenity
     */
    omit?: ListingAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingAmenityInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    f_user_id: 'f_user_id',
    email: 'email',
    email_verified: 'email_verified',
    picture: 'picture',
    name: 'name',
    role: 'role',
    lastSignedIn: 'lastSignedIn',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LocalityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    slug: 'slug'
  };

  export type LocalityScalarFieldEnum = (typeof LocalityScalarFieldEnum)[keyof typeof LocalityScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    authorId: 'authorId',
    revieweeId: 'revieweeId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ListingsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    street_name: 'street_name',
    userId: 'userId',
    images: 'images',
    available_from: 'available_from',
    ensuite: 'ensuite',
    listingType: 'listingType',
    maxGuestsInRoom: 'maxGuestsInRoom',
    totalBathrooms: 'totalBathrooms',
    totalBedrooms: 'totalBedrooms',
    totalOccupants: 'totalOccupants',
    localitySlug: 'localitySlug',
    contactNumber: 'contactNumber',
    contactNumberExtension: 'contactNumberExtension'
  };

  export type ListingsScalarFieldEnum = (typeof ListingsScalarFieldEnum)[keyof typeof ListingsScalarFieldEnum]


  export const AmenityScalarFieldEnum: {
    slug: 'slug',
    label: 'label',
    id: 'id'
  };

  export type AmenityScalarFieldEnum = (typeof AmenityScalarFieldEnum)[keyof typeof AmenityScalarFieldEnum]


  export const ListingAmenityScalarFieldEnum: {
    listingId: 'listingId',
    amenityId: 'amenityId'
  };

  export type ListingAmenityScalarFieldEnum = (typeof ListingAmenityScalarFieldEnum)[keyof typeof ListingAmenityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ListingType'
   */
  export type EnumListingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingType'>
    


  /**
   * Reference to a field of type 'ListingType[]'
   */
  export type ListEnumListingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ListingType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    f_user_id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    email_verified?: BoolFilter<"User"> | boolean
    picture?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    lastSignedIn?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    listings?: ListingsListRelationFilter
    reviewsWritten?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    f_user_id?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    picture?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    lastSignedIn?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    listings?: ListingsOrderByRelationAggregateInput
    reviewsWritten?: ReviewOrderByRelationAggregateInput
    reviewsReceived?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    f_user_id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email_verified?: BoolFilter<"User"> | boolean
    picture?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    lastSignedIn?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    listings?: ListingsListRelationFilter
    reviewsWritten?: ReviewListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
  }, "id" | "f_user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    f_user_id?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    picture?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    lastSignedIn?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    f_user_id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    email_verified?: BoolWithAggregatesFilter<"User"> | boolean
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    lastSignedIn?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LocalityWhereInput = {
    AND?: LocalityWhereInput | LocalityWhereInput[]
    OR?: LocalityWhereInput[]
    NOT?: LocalityWhereInput | LocalityWhereInput[]
    id?: StringFilter<"Locality"> | string
    name?: StringFilter<"Locality"> | string
    createdAt?: DateTimeFilter<"Locality"> | Date | string
    updatedAt?: DateTimeFilter<"Locality"> | Date | string
    slug?: StringFilter<"Locality"> | string
    listings?: ListingsListRelationFilter
  }

  export type LocalityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
    listings?: ListingsOrderByRelationAggregateInput
  }

  export type LocalityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: LocalityWhereInput | LocalityWhereInput[]
    OR?: LocalityWhereInput[]
    NOT?: LocalityWhereInput | LocalityWhereInput[]
    createdAt?: DateTimeFilter<"Locality"> | Date | string
    updatedAt?: DateTimeFilter<"Locality"> | Date | string
    listings?: ListingsListRelationFilter
  }, "id" | "name" | "slug">

  export type LocalityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
    _count?: LocalityCountOrderByAggregateInput
    _max?: LocalityMaxOrderByAggregateInput
    _min?: LocalityMinOrderByAggregateInput
  }

  export type LocalityScalarWhereWithAggregatesInput = {
    AND?: LocalityScalarWhereWithAggregatesInput | LocalityScalarWhereWithAggregatesInput[]
    OR?: LocalityScalarWhereWithAggregatesInput[]
    NOT?: LocalityScalarWhereWithAggregatesInput | LocalityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Locality"> | string
    name?: StringWithAggregatesFilter<"Locality"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Locality"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Locality"> | Date | string
    slug?: StringWithAggregatesFilter<"Locality"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    authorId?: StringFilter<"Review"> | string
    revieweeId?: StringFilter<"Review"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    revieweeId?: SortOrder
    author?: UserOrderByWithRelationInput
    reviewee?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    authorId?: StringFilter<"Review"> | string
    revieweeId?: StringFilter<"Review"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    revieweeId?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    authorId?: StringWithAggregatesFilter<"Review"> | string
    revieweeId?: StringWithAggregatesFilter<"Review"> | string
  }

  export type ListingsWhereInput = {
    AND?: ListingsWhereInput | ListingsWhereInput[]
    OR?: ListingsWhereInput[]
    NOT?: ListingsWhereInput | ListingsWhereInput[]
    id?: StringFilter<"Listings"> | string
    title?: StringFilter<"Listings"> | string
    description?: StringNullableFilter<"Listings"> | string | null
    price?: FloatFilter<"Listings"> | number
    createdAt?: DateTimeFilter<"Listings"> | Date | string
    updatedAt?: DateTimeFilter<"Listings"> | Date | string
    street_name?: StringFilter<"Listings"> | string
    userId?: StringFilter<"Listings"> | string
    images?: StringNullableListFilter<"Listings">
    available_from?: DateTimeFilter<"Listings"> | Date | string
    ensuite?: BoolFilter<"Listings"> | boolean
    listingType?: EnumListingTypeFilter<"Listings"> | $Enums.ListingType
    maxGuestsInRoom?: IntFilter<"Listings"> | number
    totalBathrooms?: IntFilter<"Listings"> | number
    totalBedrooms?: IntFilter<"Listings"> | number
    totalOccupants?: IntFilter<"Listings"> | number
    localitySlug?: StringFilter<"Listings"> | string
    contactNumber?: StringNullableFilter<"Listings"> | string | null
    contactNumberExtension?: StringNullableFilter<"Listings"> | string | null
    amenities?: ListingAmenityListRelationFilter
    locality?: XOR<LocalityScalarRelationFilter, LocalityWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ListingsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    street_name?: SortOrder
    userId?: SortOrder
    images?: SortOrder
    available_from?: SortOrder
    ensuite?: SortOrder
    listingType?: SortOrder
    maxGuestsInRoom?: SortOrder
    totalBathrooms?: SortOrder
    totalBedrooms?: SortOrder
    totalOccupants?: SortOrder
    localitySlug?: SortOrder
    contactNumber?: SortOrderInput | SortOrder
    contactNumberExtension?: SortOrderInput | SortOrder
    amenities?: ListingAmenityOrderByRelationAggregateInput
    locality?: LocalityOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ListingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListingsWhereInput | ListingsWhereInput[]
    OR?: ListingsWhereInput[]
    NOT?: ListingsWhereInput | ListingsWhereInput[]
    title?: StringFilter<"Listings"> | string
    description?: StringNullableFilter<"Listings"> | string | null
    price?: FloatFilter<"Listings"> | number
    createdAt?: DateTimeFilter<"Listings"> | Date | string
    updatedAt?: DateTimeFilter<"Listings"> | Date | string
    street_name?: StringFilter<"Listings"> | string
    userId?: StringFilter<"Listings"> | string
    images?: StringNullableListFilter<"Listings">
    available_from?: DateTimeFilter<"Listings"> | Date | string
    ensuite?: BoolFilter<"Listings"> | boolean
    listingType?: EnumListingTypeFilter<"Listings"> | $Enums.ListingType
    maxGuestsInRoom?: IntFilter<"Listings"> | number
    totalBathrooms?: IntFilter<"Listings"> | number
    totalBedrooms?: IntFilter<"Listings"> | number
    totalOccupants?: IntFilter<"Listings"> | number
    localitySlug?: StringFilter<"Listings"> | string
    contactNumber?: StringNullableFilter<"Listings"> | string | null
    contactNumberExtension?: StringNullableFilter<"Listings"> | string | null
    amenities?: ListingAmenityListRelationFilter
    locality?: XOR<LocalityScalarRelationFilter, LocalityWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ListingsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    street_name?: SortOrder
    userId?: SortOrder
    images?: SortOrder
    available_from?: SortOrder
    ensuite?: SortOrder
    listingType?: SortOrder
    maxGuestsInRoom?: SortOrder
    totalBathrooms?: SortOrder
    totalBedrooms?: SortOrder
    totalOccupants?: SortOrder
    localitySlug?: SortOrder
    contactNumber?: SortOrderInput | SortOrder
    contactNumberExtension?: SortOrderInput | SortOrder
    _count?: ListingsCountOrderByAggregateInput
    _avg?: ListingsAvgOrderByAggregateInput
    _max?: ListingsMaxOrderByAggregateInput
    _min?: ListingsMinOrderByAggregateInput
    _sum?: ListingsSumOrderByAggregateInput
  }

  export type ListingsScalarWhereWithAggregatesInput = {
    AND?: ListingsScalarWhereWithAggregatesInput | ListingsScalarWhereWithAggregatesInput[]
    OR?: ListingsScalarWhereWithAggregatesInput[]
    NOT?: ListingsScalarWhereWithAggregatesInput | ListingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Listings"> | string
    title?: StringWithAggregatesFilter<"Listings"> | string
    description?: StringNullableWithAggregatesFilter<"Listings"> | string | null
    price?: FloatWithAggregatesFilter<"Listings"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Listings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Listings"> | Date | string
    street_name?: StringWithAggregatesFilter<"Listings"> | string
    userId?: StringWithAggregatesFilter<"Listings"> | string
    images?: StringNullableListFilter<"Listings">
    available_from?: DateTimeWithAggregatesFilter<"Listings"> | Date | string
    ensuite?: BoolWithAggregatesFilter<"Listings"> | boolean
    listingType?: EnumListingTypeWithAggregatesFilter<"Listings"> | $Enums.ListingType
    maxGuestsInRoom?: IntWithAggregatesFilter<"Listings"> | number
    totalBathrooms?: IntWithAggregatesFilter<"Listings"> | number
    totalBedrooms?: IntWithAggregatesFilter<"Listings"> | number
    totalOccupants?: IntWithAggregatesFilter<"Listings"> | number
    localitySlug?: StringWithAggregatesFilter<"Listings"> | string
    contactNumber?: StringNullableWithAggregatesFilter<"Listings"> | string | null
    contactNumberExtension?: StringNullableWithAggregatesFilter<"Listings"> | string | null
  }

  export type AmenityWhereInput = {
    AND?: AmenityWhereInput | AmenityWhereInput[]
    OR?: AmenityWhereInput[]
    NOT?: AmenityWhereInput | AmenityWhereInput[]
    slug?: StringFilter<"Amenity"> | string
    label?: StringFilter<"Amenity"> | string
    id?: IntFilter<"Amenity"> | number
    listings?: ListingAmenityListRelationFilter
  }

  export type AmenityOrderByWithRelationInput = {
    slug?: SortOrder
    label?: SortOrder
    id?: SortOrder
    listings?: ListingAmenityOrderByRelationAggregateInput
  }

  export type AmenityWhereUniqueInput = Prisma.AtLeast<{
    slug?: string
    id?: number
    AND?: AmenityWhereInput | AmenityWhereInput[]
    OR?: AmenityWhereInput[]
    NOT?: AmenityWhereInput | AmenityWhereInput[]
    label?: StringFilter<"Amenity"> | string
    listings?: ListingAmenityListRelationFilter
  }, "id" | "slug">

  export type AmenityOrderByWithAggregationInput = {
    slug?: SortOrder
    label?: SortOrder
    id?: SortOrder
    _count?: AmenityCountOrderByAggregateInput
    _avg?: AmenityAvgOrderByAggregateInput
    _max?: AmenityMaxOrderByAggregateInput
    _min?: AmenityMinOrderByAggregateInput
    _sum?: AmenitySumOrderByAggregateInput
  }

  export type AmenityScalarWhereWithAggregatesInput = {
    AND?: AmenityScalarWhereWithAggregatesInput | AmenityScalarWhereWithAggregatesInput[]
    OR?: AmenityScalarWhereWithAggregatesInput[]
    NOT?: AmenityScalarWhereWithAggregatesInput | AmenityScalarWhereWithAggregatesInput[]
    slug?: StringWithAggregatesFilter<"Amenity"> | string
    label?: StringWithAggregatesFilter<"Amenity"> | string
    id?: IntWithAggregatesFilter<"Amenity"> | number
  }

  export type ListingAmenityWhereInput = {
    AND?: ListingAmenityWhereInput | ListingAmenityWhereInput[]
    OR?: ListingAmenityWhereInput[]
    NOT?: ListingAmenityWhereInput | ListingAmenityWhereInput[]
    listingId?: StringFilter<"ListingAmenity"> | string
    amenityId?: IntFilter<"ListingAmenity"> | number
    amenity?: XOR<AmenityScalarRelationFilter, AmenityWhereInput>
    listing?: XOR<ListingsScalarRelationFilter, ListingsWhereInput>
  }

  export type ListingAmenityOrderByWithRelationInput = {
    listingId?: SortOrder
    amenityId?: SortOrder
    amenity?: AmenityOrderByWithRelationInput
    listing?: ListingsOrderByWithRelationInput
  }

  export type ListingAmenityWhereUniqueInput = Prisma.AtLeast<{
    listingId_amenityId?: ListingAmenityListingIdAmenityIdCompoundUniqueInput
    AND?: ListingAmenityWhereInput | ListingAmenityWhereInput[]
    OR?: ListingAmenityWhereInput[]
    NOT?: ListingAmenityWhereInput | ListingAmenityWhereInput[]
    listingId?: StringFilter<"ListingAmenity"> | string
    amenityId?: IntFilter<"ListingAmenity"> | number
    amenity?: XOR<AmenityScalarRelationFilter, AmenityWhereInput>
    listing?: XOR<ListingsScalarRelationFilter, ListingsWhereInput>
  }, "listingId_amenityId">

  export type ListingAmenityOrderByWithAggregationInput = {
    listingId?: SortOrder
    amenityId?: SortOrder
    _count?: ListingAmenityCountOrderByAggregateInput
    _avg?: ListingAmenityAvgOrderByAggregateInput
    _max?: ListingAmenityMaxOrderByAggregateInput
    _min?: ListingAmenityMinOrderByAggregateInput
    _sum?: ListingAmenitySumOrderByAggregateInput
  }

  export type ListingAmenityScalarWhereWithAggregatesInput = {
    AND?: ListingAmenityScalarWhereWithAggregatesInput | ListingAmenityScalarWhereWithAggregatesInput[]
    OR?: ListingAmenityScalarWhereWithAggregatesInput[]
    NOT?: ListingAmenityScalarWhereWithAggregatesInput | ListingAmenityScalarWhereWithAggregatesInput[]
    listingId?: StringWithAggregatesFilter<"ListingAmenity"> | string
    amenityId?: IntWithAggregatesFilter<"ListingAmenity"> | number
  }

  export type UserCreateInput = {
    id?: string
    f_user_id: string
    email: string
    email_verified: boolean
    picture?: string | null
    name?: string | null
    role?: $Enums.Role
    lastSignedIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingsCreateNestedManyWithoutUserInput
    reviewsWritten?: ReviewCreateNestedManyWithoutAuthorInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    f_user_id: string
    email: string
    email_verified: boolean
    picture?: string | null
    name?: string | null
    role?: $Enums.Role
    lastSignedIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingsUncheckedCreateNestedManyWithoutUserInput
    reviewsWritten?: ReviewUncheckedCreateNestedManyWithoutAuthorInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    f_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastSignedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingsUpdateManyWithoutUserNestedInput
    reviewsWritten?: ReviewUpdateManyWithoutAuthorNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    f_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastSignedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingsUncheckedUpdateManyWithoutUserNestedInput
    reviewsWritten?: ReviewUncheckedUpdateManyWithoutAuthorNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    f_user_id: string
    email: string
    email_verified: boolean
    picture?: string | null
    name?: string | null
    role?: $Enums.Role
    lastSignedIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    f_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastSignedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    f_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastSignedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalityCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    listings?: ListingsCreateNestedManyWithoutLocalityInput
  }

  export type LocalityUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
    listings?: ListingsUncheckedCreateNestedManyWithoutLocalityInput
  }

  export type LocalityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    listings?: ListingsUpdateManyWithoutLocalityNestedInput
  }

  export type LocalityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
    listings?: ListingsUncheckedUpdateManyWithoutLocalityNestedInput
  }

  export type LocalityCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
  }

  export type LocalityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type LocalityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutReviewsWrittenInput
    reviewee: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    authorId: string
    revieweeId: string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutReviewsWrittenNestedInput
    reviewee?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    authorId: string
    revieweeId: string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
  }

  export type ListingsCreateInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    street_name: string
    images?: ListingsCreateimagesInput | string[]
    available_from: Date | string
    ensuite?: boolean
    listingType: $Enums.ListingType
    maxGuestsInRoom?: number
    totalBathrooms: number
    totalBedrooms: number
    totalOccupants: number
    contactNumber?: string | null
    contactNumberExtension?: string | null
    amenities?: ListingAmenityCreateNestedManyWithoutListingInput
    locality: LocalityCreateNestedOneWithoutListingsInput
    user: UserCreateNestedOneWithoutListingsInput
  }

  export type ListingsUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    street_name: string
    userId: string
    images?: ListingsCreateimagesInput | string[]
    available_from: Date | string
    ensuite?: boolean
    listingType: $Enums.ListingType
    maxGuestsInRoom?: number
    totalBathrooms: number
    totalBedrooms: number
    totalOccupants: number
    localitySlug: string
    contactNumber?: string | null
    contactNumberExtension?: string | null
    amenities?: ListingAmenityUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street_name?: StringFieldUpdateOperationsInput | string
    images?: ListingsUpdateimagesInput | string[]
    available_from?: DateTimeFieldUpdateOperationsInput | Date | string
    ensuite?: BoolFieldUpdateOperationsInput | boolean
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    maxGuestsInRoom?: IntFieldUpdateOperationsInput | number
    totalBathrooms?: IntFieldUpdateOperationsInput | number
    totalBedrooms?: IntFieldUpdateOperationsInput | number
    totalOccupants?: IntFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumberExtension?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: ListingAmenityUpdateManyWithoutListingNestedInput
    locality?: LocalityUpdateOneRequiredWithoutListingsNestedInput
    user?: UserUpdateOneRequiredWithoutListingsNestedInput
  }

  export type ListingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street_name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    images?: ListingsUpdateimagesInput | string[]
    available_from?: DateTimeFieldUpdateOperationsInput | Date | string
    ensuite?: BoolFieldUpdateOperationsInput | boolean
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    maxGuestsInRoom?: IntFieldUpdateOperationsInput | number
    totalBathrooms?: IntFieldUpdateOperationsInput | number
    totalBedrooms?: IntFieldUpdateOperationsInput | number
    totalOccupants?: IntFieldUpdateOperationsInput | number
    localitySlug?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumberExtension?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: ListingAmenityUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingsCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    street_name: string
    userId: string
    images?: ListingsCreateimagesInput | string[]
    available_from: Date | string
    ensuite?: boolean
    listingType: $Enums.ListingType
    maxGuestsInRoom?: number
    totalBathrooms: number
    totalBedrooms: number
    totalOccupants: number
    localitySlug: string
    contactNumber?: string | null
    contactNumberExtension?: string | null
  }

  export type ListingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street_name?: StringFieldUpdateOperationsInput | string
    images?: ListingsUpdateimagesInput | string[]
    available_from?: DateTimeFieldUpdateOperationsInput | Date | string
    ensuite?: BoolFieldUpdateOperationsInput | boolean
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    maxGuestsInRoom?: IntFieldUpdateOperationsInput | number
    totalBathrooms?: IntFieldUpdateOperationsInput | number
    totalBedrooms?: IntFieldUpdateOperationsInput | number
    totalOccupants?: IntFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumberExtension?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street_name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    images?: ListingsUpdateimagesInput | string[]
    available_from?: DateTimeFieldUpdateOperationsInput | Date | string
    ensuite?: BoolFieldUpdateOperationsInput | boolean
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    maxGuestsInRoom?: IntFieldUpdateOperationsInput | number
    totalBathrooms?: IntFieldUpdateOperationsInput | number
    totalBedrooms?: IntFieldUpdateOperationsInput | number
    totalOccupants?: IntFieldUpdateOperationsInput | number
    localitySlug?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumberExtension?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmenityCreateInput = {
    slug: string
    label: string
    listings?: ListingAmenityCreateNestedManyWithoutAmenityInput
  }

  export type AmenityUncheckedCreateInput = {
    slug: string
    label: string
    id?: number
    listings?: ListingAmenityUncheckedCreateNestedManyWithoutAmenityInput
  }

  export type AmenityUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    listings?: ListingAmenityUpdateManyWithoutAmenityNestedInput
  }

  export type AmenityUncheckedUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    listings?: ListingAmenityUncheckedUpdateManyWithoutAmenityNestedInput
  }

  export type AmenityCreateManyInput = {
    slug: string
    label: string
    id?: number
  }

  export type AmenityUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type AmenityUncheckedUpdateManyInput = {
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type ListingAmenityCreateInput = {
    amenity: AmenityCreateNestedOneWithoutListingsInput
    listing: ListingsCreateNestedOneWithoutAmenitiesInput
  }

  export type ListingAmenityUncheckedCreateInput = {
    listingId: string
    amenityId: number
  }

  export type ListingAmenityUpdateInput = {
    amenity?: AmenityUpdateOneRequiredWithoutListingsNestedInput
    listing?: ListingsUpdateOneRequiredWithoutAmenitiesNestedInput
  }

  export type ListingAmenityUncheckedUpdateInput = {
    listingId?: StringFieldUpdateOperationsInput | string
    amenityId?: IntFieldUpdateOperationsInput | number
  }

  export type ListingAmenityCreateManyInput = {
    listingId: string
    amenityId: number
  }

  export type ListingAmenityUpdateManyMutationInput = {

  }

  export type ListingAmenityUncheckedUpdateManyInput = {
    listingId?: StringFieldUpdateOperationsInput | string
    amenityId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ListingsListRelationFilter = {
    every?: ListingsWhereInput
    some?: ListingsWhereInput
    none?: ListingsWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ListingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    f_user_id?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    picture?: SortOrder
    name?: SortOrder
    role?: SortOrder
    lastSignedIn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    f_user_id?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    picture?: SortOrder
    name?: SortOrder
    role?: SortOrder
    lastSignedIn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    f_user_id?: SortOrder
    email?: SortOrder
    email_verified?: SortOrder
    picture?: SortOrder
    name?: SortOrder
    role?: SortOrder
    lastSignedIn?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LocalityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
  }

  export type LocalityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
  }

  export type LocalityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slug?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    revieweeId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    revieweeId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    authorId?: SortOrder
    revieweeId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumListingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingType | EnumListingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumListingTypeFilter<$PrismaModel> | $Enums.ListingType
  }

  export type ListingAmenityListRelationFilter = {
    every?: ListingAmenityWhereInput
    some?: ListingAmenityWhereInput
    none?: ListingAmenityWhereInput
  }

  export type LocalityScalarRelationFilter = {
    is?: LocalityWhereInput
    isNot?: LocalityWhereInput
  }

  export type ListingAmenityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListingsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    street_name?: SortOrder
    userId?: SortOrder
    images?: SortOrder
    available_from?: SortOrder
    ensuite?: SortOrder
    listingType?: SortOrder
    maxGuestsInRoom?: SortOrder
    totalBathrooms?: SortOrder
    totalBedrooms?: SortOrder
    totalOccupants?: SortOrder
    localitySlug?: SortOrder
    contactNumber?: SortOrder
    contactNumberExtension?: SortOrder
  }

  export type ListingsAvgOrderByAggregateInput = {
    price?: SortOrder
    maxGuestsInRoom?: SortOrder
    totalBathrooms?: SortOrder
    totalBedrooms?: SortOrder
    totalOccupants?: SortOrder
  }

  export type ListingsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    street_name?: SortOrder
    userId?: SortOrder
    available_from?: SortOrder
    ensuite?: SortOrder
    listingType?: SortOrder
    maxGuestsInRoom?: SortOrder
    totalBathrooms?: SortOrder
    totalBedrooms?: SortOrder
    totalOccupants?: SortOrder
    localitySlug?: SortOrder
    contactNumber?: SortOrder
    contactNumberExtension?: SortOrder
  }

  export type ListingsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    street_name?: SortOrder
    userId?: SortOrder
    available_from?: SortOrder
    ensuite?: SortOrder
    listingType?: SortOrder
    maxGuestsInRoom?: SortOrder
    totalBathrooms?: SortOrder
    totalBedrooms?: SortOrder
    totalOccupants?: SortOrder
    localitySlug?: SortOrder
    contactNumber?: SortOrder
    contactNumberExtension?: SortOrder
  }

  export type ListingsSumOrderByAggregateInput = {
    price?: SortOrder
    maxGuestsInRoom?: SortOrder
    totalBathrooms?: SortOrder
    totalBedrooms?: SortOrder
    totalOccupants?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumListingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingType | EnumListingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumListingTypeWithAggregatesFilter<$PrismaModel> | $Enums.ListingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingTypeFilter<$PrismaModel>
    _max?: NestedEnumListingTypeFilter<$PrismaModel>
  }

  export type AmenityCountOrderByAggregateInput = {
    slug?: SortOrder
    label?: SortOrder
    id?: SortOrder
  }

  export type AmenityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AmenityMaxOrderByAggregateInput = {
    slug?: SortOrder
    label?: SortOrder
    id?: SortOrder
  }

  export type AmenityMinOrderByAggregateInput = {
    slug?: SortOrder
    label?: SortOrder
    id?: SortOrder
  }

  export type AmenitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AmenityScalarRelationFilter = {
    is?: AmenityWhereInput
    isNot?: AmenityWhereInput
  }

  export type ListingsScalarRelationFilter = {
    is?: ListingsWhereInput
    isNot?: ListingsWhereInput
  }

  export type ListingAmenityListingIdAmenityIdCompoundUniqueInput = {
    listingId: string
    amenityId: number
  }

  export type ListingAmenityCountOrderByAggregateInput = {
    listingId?: SortOrder
    amenityId?: SortOrder
  }

  export type ListingAmenityAvgOrderByAggregateInput = {
    amenityId?: SortOrder
  }

  export type ListingAmenityMaxOrderByAggregateInput = {
    listingId?: SortOrder
    amenityId?: SortOrder
  }

  export type ListingAmenityMinOrderByAggregateInput = {
    listingId?: SortOrder
    amenityId?: SortOrder
  }

  export type ListingAmenitySumOrderByAggregateInput = {
    amenityId?: SortOrder
  }

  export type ListingsCreateNestedManyWithoutUserInput = {
    create?: XOR<ListingsCreateWithoutUserInput, ListingsUncheckedCreateWithoutUserInput> | ListingsCreateWithoutUserInput[] | ListingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListingsCreateOrConnectWithoutUserInput | ListingsCreateOrConnectWithoutUserInput[]
    createMany?: ListingsCreateManyUserInputEnvelope
    connect?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReviewCreateWithoutAuthorInput, ReviewUncheckedCreateWithoutAuthorInput> | ReviewCreateWithoutAuthorInput[] | ReviewUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAuthorInput | ReviewCreateOrConnectWithoutAuthorInput[]
    createMany?: ReviewCreateManyAuthorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutRevieweeInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ListingsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ListingsCreateWithoutUserInput, ListingsUncheckedCreateWithoutUserInput> | ListingsCreateWithoutUserInput[] | ListingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListingsCreateOrConnectWithoutUserInput | ListingsCreateOrConnectWithoutUserInput[]
    createMany?: ListingsCreateManyUserInputEnvelope
    connect?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReviewCreateWithoutAuthorInput, ReviewUncheckedCreateWithoutAuthorInput> | ReviewCreateWithoutAuthorInput[] | ReviewUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAuthorInput | ReviewCreateOrConnectWithoutAuthorInput[]
    createMany?: ReviewCreateManyAuthorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutRevieweeInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ListingsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListingsCreateWithoutUserInput, ListingsUncheckedCreateWithoutUserInput> | ListingsCreateWithoutUserInput[] | ListingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListingsCreateOrConnectWithoutUserInput | ListingsCreateOrConnectWithoutUserInput[]
    upsert?: ListingsUpsertWithWhereUniqueWithoutUserInput | ListingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListingsCreateManyUserInputEnvelope
    set?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
    disconnect?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
    delete?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
    connect?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
    update?: ListingsUpdateWithWhereUniqueWithoutUserInput | ListingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListingsUpdateManyWithWhereWithoutUserInput | ListingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListingsScalarWhereInput | ListingsScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReviewCreateWithoutAuthorInput, ReviewUncheckedCreateWithoutAuthorInput> | ReviewCreateWithoutAuthorInput[] | ReviewUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAuthorInput | ReviewCreateOrConnectWithoutAuthorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutAuthorInput | ReviewUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReviewCreateManyAuthorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutAuthorInput | ReviewUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutAuthorInput | ReviewUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutRevieweeNestedInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRevieweeInput | ReviewUpsertWithWhereUniqueWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRevieweeInput | ReviewUpdateWithWhereUniqueWithoutRevieweeInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRevieweeInput | ReviewUpdateManyWithWhereWithoutRevieweeInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ListingsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListingsCreateWithoutUserInput, ListingsUncheckedCreateWithoutUserInput> | ListingsCreateWithoutUserInput[] | ListingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListingsCreateOrConnectWithoutUserInput | ListingsCreateOrConnectWithoutUserInput[]
    upsert?: ListingsUpsertWithWhereUniqueWithoutUserInput | ListingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListingsCreateManyUserInputEnvelope
    set?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
    disconnect?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
    delete?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
    connect?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
    update?: ListingsUpdateWithWhereUniqueWithoutUserInput | ListingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListingsUpdateManyWithWhereWithoutUserInput | ListingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListingsScalarWhereInput | ListingsScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReviewCreateWithoutAuthorInput, ReviewUncheckedCreateWithoutAuthorInput> | ReviewCreateWithoutAuthorInput[] | ReviewUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAuthorInput | ReviewCreateOrConnectWithoutAuthorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutAuthorInput | ReviewUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReviewCreateManyAuthorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutAuthorInput | ReviewUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutAuthorInput | ReviewUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutRevieweeNestedInput = {
    create?: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput> | ReviewCreateWithoutRevieweeInput[] | ReviewUncheckedCreateWithoutRevieweeInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeInput | ReviewCreateOrConnectWithoutRevieweeInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRevieweeInput | ReviewUpsertWithWhereUniqueWithoutRevieweeInput[]
    createMany?: ReviewCreateManyRevieweeInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRevieweeInput | ReviewUpdateWithWhereUniqueWithoutRevieweeInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRevieweeInput | ReviewUpdateManyWithWhereWithoutRevieweeInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ListingsCreateNestedManyWithoutLocalityInput = {
    create?: XOR<ListingsCreateWithoutLocalityInput, ListingsUncheckedCreateWithoutLocalityInput> | ListingsCreateWithoutLocalityInput[] | ListingsUncheckedCreateWithoutLocalityInput[]
    connectOrCreate?: ListingsCreateOrConnectWithoutLocalityInput | ListingsCreateOrConnectWithoutLocalityInput[]
    createMany?: ListingsCreateManyLocalityInputEnvelope
    connect?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
  }

  export type ListingsUncheckedCreateNestedManyWithoutLocalityInput = {
    create?: XOR<ListingsCreateWithoutLocalityInput, ListingsUncheckedCreateWithoutLocalityInput> | ListingsCreateWithoutLocalityInput[] | ListingsUncheckedCreateWithoutLocalityInput[]
    connectOrCreate?: ListingsCreateOrConnectWithoutLocalityInput | ListingsCreateOrConnectWithoutLocalityInput[]
    createMany?: ListingsCreateManyLocalityInputEnvelope
    connect?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
  }

  export type ListingsUpdateManyWithoutLocalityNestedInput = {
    create?: XOR<ListingsCreateWithoutLocalityInput, ListingsUncheckedCreateWithoutLocalityInput> | ListingsCreateWithoutLocalityInput[] | ListingsUncheckedCreateWithoutLocalityInput[]
    connectOrCreate?: ListingsCreateOrConnectWithoutLocalityInput | ListingsCreateOrConnectWithoutLocalityInput[]
    upsert?: ListingsUpsertWithWhereUniqueWithoutLocalityInput | ListingsUpsertWithWhereUniqueWithoutLocalityInput[]
    createMany?: ListingsCreateManyLocalityInputEnvelope
    set?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
    disconnect?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
    delete?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
    connect?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
    update?: ListingsUpdateWithWhereUniqueWithoutLocalityInput | ListingsUpdateWithWhereUniqueWithoutLocalityInput[]
    updateMany?: ListingsUpdateManyWithWhereWithoutLocalityInput | ListingsUpdateManyWithWhereWithoutLocalityInput[]
    deleteMany?: ListingsScalarWhereInput | ListingsScalarWhereInput[]
  }

  export type ListingsUncheckedUpdateManyWithoutLocalityNestedInput = {
    create?: XOR<ListingsCreateWithoutLocalityInput, ListingsUncheckedCreateWithoutLocalityInput> | ListingsCreateWithoutLocalityInput[] | ListingsUncheckedCreateWithoutLocalityInput[]
    connectOrCreate?: ListingsCreateOrConnectWithoutLocalityInput | ListingsCreateOrConnectWithoutLocalityInput[]
    upsert?: ListingsUpsertWithWhereUniqueWithoutLocalityInput | ListingsUpsertWithWhereUniqueWithoutLocalityInput[]
    createMany?: ListingsCreateManyLocalityInputEnvelope
    set?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
    disconnect?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
    delete?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
    connect?: ListingsWhereUniqueInput | ListingsWhereUniqueInput[]
    update?: ListingsUpdateWithWhereUniqueWithoutLocalityInput | ListingsUpdateWithWhereUniqueWithoutLocalityInput[]
    updateMany?: ListingsUpdateManyWithWhereWithoutLocalityInput | ListingsUpdateManyWithWhereWithoutLocalityInput[]
    deleteMany?: ListingsScalarWhereInput | ListingsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewsWrittenInput = {
    create?: XOR<UserCreateWithoutReviewsWrittenInput, UserUncheckedCreateWithoutReviewsWrittenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsWrittenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsReceivedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutReviewsWrittenNestedInput = {
    create?: XOR<UserCreateWithoutReviewsWrittenInput, UserUncheckedCreateWithoutReviewsWrittenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsWrittenInput
    upsert?: UserUpsertWithoutReviewsWrittenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsWrittenInput, UserUpdateWithoutReviewsWrittenInput>, UserUncheckedUpdateWithoutReviewsWrittenInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsReceivedInput
    upsert?: UserUpsertWithoutReviewsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsReceivedInput, UserUpdateWithoutReviewsReceivedInput>, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type ListingsCreateimagesInput = {
    set: string[]
  }

  export type ListingAmenityCreateNestedManyWithoutListingInput = {
    create?: XOR<ListingAmenityCreateWithoutListingInput, ListingAmenityUncheckedCreateWithoutListingInput> | ListingAmenityCreateWithoutListingInput[] | ListingAmenityUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingAmenityCreateOrConnectWithoutListingInput | ListingAmenityCreateOrConnectWithoutListingInput[]
    createMany?: ListingAmenityCreateManyListingInputEnvelope
    connect?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
  }

  export type LocalityCreateNestedOneWithoutListingsInput = {
    create?: XOR<LocalityCreateWithoutListingsInput, LocalityUncheckedCreateWithoutListingsInput>
    connectOrCreate?: LocalityCreateOrConnectWithoutListingsInput
    connect?: LocalityWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutListingsInput = {
    create?: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsInput
    connect?: UserWhereUniqueInput
  }

  export type ListingAmenityUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<ListingAmenityCreateWithoutListingInput, ListingAmenityUncheckedCreateWithoutListingInput> | ListingAmenityCreateWithoutListingInput[] | ListingAmenityUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingAmenityCreateOrConnectWithoutListingInput | ListingAmenityCreateOrConnectWithoutListingInput[]
    createMany?: ListingAmenityCreateManyListingInputEnvelope
    connect?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ListingsUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumListingTypeFieldUpdateOperationsInput = {
    set?: $Enums.ListingType
  }

  export type ListingAmenityUpdateManyWithoutListingNestedInput = {
    create?: XOR<ListingAmenityCreateWithoutListingInput, ListingAmenityUncheckedCreateWithoutListingInput> | ListingAmenityCreateWithoutListingInput[] | ListingAmenityUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingAmenityCreateOrConnectWithoutListingInput | ListingAmenityCreateOrConnectWithoutListingInput[]
    upsert?: ListingAmenityUpsertWithWhereUniqueWithoutListingInput | ListingAmenityUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ListingAmenityCreateManyListingInputEnvelope
    set?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
    disconnect?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
    delete?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
    connect?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
    update?: ListingAmenityUpdateWithWhereUniqueWithoutListingInput | ListingAmenityUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ListingAmenityUpdateManyWithWhereWithoutListingInput | ListingAmenityUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ListingAmenityScalarWhereInput | ListingAmenityScalarWhereInput[]
  }

  export type LocalityUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<LocalityCreateWithoutListingsInput, LocalityUncheckedCreateWithoutListingsInput>
    connectOrCreate?: LocalityCreateOrConnectWithoutListingsInput
    upsert?: LocalityUpsertWithoutListingsInput
    connect?: LocalityWhereUniqueInput
    update?: XOR<XOR<LocalityUpdateToOneWithWhereWithoutListingsInput, LocalityUpdateWithoutListingsInput>, LocalityUncheckedUpdateWithoutListingsInput>
  }

  export type UserUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsInput
    upsert?: UserUpsertWithoutListingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListingsInput, UserUpdateWithoutListingsInput>, UserUncheckedUpdateWithoutListingsInput>
  }

  export type ListingAmenityUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<ListingAmenityCreateWithoutListingInput, ListingAmenityUncheckedCreateWithoutListingInput> | ListingAmenityCreateWithoutListingInput[] | ListingAmenityUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ListingAmenityCreateOrConnectWithoutListingInput | ListingAmenityCreateOrConnectWithoutListingInput[]
    upsert?: ListingAmenityUpsertWithWhereUniqueWithoutListingInput | ListingAmenityUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ListingAmenityCreateManyListingInputEnvelope
    set?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
    disconnect?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
    delete?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
    connect?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
    update?: ListingAmenityUpdateWithWhereUniqueWithoutListingInput | ListingAmenityUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ListingAmenityUpdateManyWithWhereWithoutListingInput | ListingAmenityUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ListingAmenityScalarWhereInput | ListingAmenityScalarWhereInput[]
  }

  export type ListingAmenityCreateNestedManyWithoutAmenityInput = {
    create?: XOR<ListingAmenityCreateWithoutAmenityInput, ListingAmenityUncheckedCreateWithoutAmenityInput> | ListingAmenityCreateWithoutAmenityInput[] | ListingAmenityUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: ListingAmenityCreateOrConnectWithoutAmenityInput | ListingAmenityCreateOrConnectWithoutAmenityInput[]
    createMany?: ListingAmenityCreateManyAmenityInputEnvelope
    connect?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
  }

  export type ListingAmenityUncheckedCreateNestedManyWithoutAmenityInput = {
    create?: XOR<ListingAmenityCreateWithoutAmenityInput, ListingAmenityUncheckedCreateWithoutAmenityInput> | ListingAmenityCreateWithoutAmenityInput[] | ListingAmenityUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: ListingAmenityCreateOrConnectWithoutAmenityInput | ListingAmenityCreateOrConnectWithoutAmenityInput[]
    createMany?: ListingAmenityCreateManyAmenityInputEnvelope
    connect?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
  }

  export type ListingAmenityUpdateManyWithoutAmenityNestedInput = {
    create?: XOR<ListingAmenityCreateWithoutAmenityInput, ListingAmenityUncheckedCreateWithoutAmenityInput> | ListingAmenityCreateWithoutAmenityInput[] | ListingAmenityUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: ListingAmenityCreateOrConnectWithoutAmenityInput | ListingAmenityCreateOrConnectWithoutAmenityInput[]
    upsert?: ListingAmenityUpsertWithWhereUniqueWithoutAmenityInput | ListingAmenityUpsertWithWhereUniqueWithoutAmenityInput[]
    createMany?: ListingAmenityCreateManyAmenityInputEnvelope
    set?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
    disconnect?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
    delete?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
    connect?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
    update?: ListingAmenityUpdateWithWhereUniqueWithoutAmenityInput | ListingAmenityUpdateWithWhereUniqueWithoutAmenityInput[]
    updateMany?: ListingAmenityUpdateManyWithWhereWithoutAmenityInput | ListingAmenityUpdateManyWithWhereWithoutAmenityInput[]
    deleteMany?: ListingAmenityScalarWhereInput | ListingAmenityScalarWhereInput[]
  }

  export type ListingAmenityUncheckedUpdateManyWithoutAmenityNestedInput = {
    create?: XOR<ListingAmenityCreateWithoutAmenityInput, ListingAmenityUncheckedCreateWithoutAmenityInput> | ListingAmenityCreateWithoutAmenityInput[] | ListingAmenityUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: ListingAmenityCreateOrConnectWithoutAmenityInput | ListingAmenityCreateOrConnectWithoutAmenityInput[]
    upsert?: ListingAmenityUpsertWithWhereUniqueWithoutAmenityInput | ListingAmenityUpsertWithWhereUniqueWithoutAmenityInput[]
    createMany?: ListingAmenityCreateManyAmenityInputEnvelope
    set?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
    disconnect?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
    delete?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
    connect?: ListingAmenityWhereUniqueInput | ListingAmenityWhereUniqueInput[]
    update?: ListingAmenityUpdateWithWhereUniqueWithoutAmenityInput | ListingAmenityUpdateWithWhereUniqueWithoutAmenityInput[]
    updateMany?: ListingAmenityUpdateManyWithWhereWithoutAmenityInput | ListingAmenityUpdateManyWithWhereWithoutAmenityInput[]
    deleteMany?: ListingAmenityScalarWhereInput | ListingAmenityScalarWhereInput[]
  }

  export type AmenityCreateNestedOneWithoutListingsInput = {
    create?: XOR<AmenityCreateWithoutListingsInput, AmenityUncheckedCreateWithoutListingsInput>
    connectOrCreate?: AmenityCreateOrConnectWithoutListingsInput
    connect?: AmenityWhereUniqueInput
  }

  export type ListingsCreateNestedOneWithoutAmenitiesInput = {
    create?: XOR<ListingsCreateWithoutAmenitiesInput, ListingsUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: ListingsCreateOrConnectWithoutAmenitiesInput
    connect?: ListingsWhereUniqueInput
  }

  export type AmenityUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<AmenityCreateWithoutListingsInput, AmenityUncheckedCreateWithoutListingsInput>
    connectOrCreate?: AmenityCreateOrConnectWithoutListingsInput
    upsert?: AmenityUpsertWithoutListingsInput
    connect?: AmenityWhereUniqueInput
    update?: XOR<XOR<AmenityUpdateToOneWithWhereWithoutListingsInput, AmenityUpdateWithoutListingsInput>, AmenityUncheckedUpdateWithoutListingsInput>
  }

  export type ListingsUpdateOneRequiredWithoutAmenitiesNestedInput = {
    create?: XOR<ListingsCreateWithoutAmenitiesInput, ListingsUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: ListingsCreateOrConnectWithoutAmenitiesInput
    upsert?: ListingsUpsertWithoutAmenitiesInput
    connect?: ListingsWhereUniqueInput
    update?: XOR<XOR<ListingsUpdateToOneWithWhereWithoutAmenitiesInput, ListingsUpdateWithoutAmenitiesInput>, ListingsUncheckedUpdateWithoutAmenitiesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumListingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingType | EnumListingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumListingTypeFilter<$PrismaModel> | $Enums.ListingType
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumListingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ListingType | EnumListingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ListingType[] | ListEnumListingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumListingTypeWithAggregatesFilter<$PrismaModel> | $Enums.ListingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumListingTypeFilter<$PrismaModel>
    _max?: NestedEnumListingTypeFilter<$PrismaModel>
  }

  export type ListingsCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    street_name: string
    images?: ListingsCreateimagesInput | string[]
    available_from: Date | string
    ensuite?: boolean
    listingType: $Enums.ListingType
    maxGuestsInRoom?: number
    totalBathrooms: number
    totalBedrooms: number
    totalOccupants: number
    contactNumber?: string | null
    contactNumberExtension?: string | null
    amenities?: ListingAmenityCreateNestedManyWithoutListingInput
    locality: LocalityCreateNestedOneWithoutListingsInput
  }

  export type ListingsUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    street_name: string
    images?: ListingsCreateimagesInput | string[]
    available_from: Date | string
    ensuite?: boolean
    listingType: $Enums.ListingType
    maxGuestsInRoom?: number
    totalBathrooms: number
    totalBedrooms: number
    totalOccupants: number
    localitySlug: string
    contactNumber?: string | null
    contactNumberExtension?: string | null
    amenities?: ListingAmenityUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingsCreateOrConnectWithoutUserInput = {
    where: ListingsWhereUniqueInput
    create: XOR<ListingsCreateWithoutUserInput, ListingsUncheckedCreateWithoutUserInput>
  }

  export type ListingsCreateManyUserInputEnvelope = {
    data: ListingsCreateManyUserInput | ListingsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutAuthorInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    reviewee: UserCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutAuthorInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    revieweeId: string
  }

  export type ReviewCreateOrConnectWithoutAuthorInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutAuthorInput, ReviewUncheckedCreateWithoutAuthorInput>
  }

  export type ReviewCreateManyAuthorInputEnvelope = {
    data: ReviewCreateManyAuthorInput | ReviewCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutRevieweeInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutReviewsWrittenInput
  }

  export type ReviewUncheckedCreateWithoutRevieweeInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    authorId: string
  }

  export type ReviewCreateOrConnectWithoutRevieweeInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput>
  }

  export type ReviewCreateManyRevieweeInputEnvelope = {
    data: ReviewCreateManyRevieweeInput | ReviewCreateManyRevieweeInput[]
    skipDuplicates?: boolean
  }

  export type ListingsUpsertWithWhereUniqueWithoutUserInput = {
    where: ListingsWhereUniqueInput
    update: XOR<ListingsUpdateWithoutUserInput, ListingsUncheckedUpdateWithoutUserInput>
    create: XOR<ListingsCreateWithoutUserInput, ListingsUncheckedCreateWithoutUserInput>
  }

  export type ListingsUpdateWithWhereUniqueWithoutUserInput = {
    where: ListingsWhereUniqueInput
    data: XOR<ListingsUpdateWithoutUserInput, ListingsUncheckedUpdateWithoutUserInput>
  }

  export type ListingsUpdateManyWithWhereWithoutUserInput = {
    where: ListingsScalarWhereInput
    data: XOR<ListingsUpdateManyMutationInput, ListingsUncheckedUpdateManyWithoutUserInput>
  }

  export type ListingsScalarWhereInput = {
    AND?: ListingsScalarWhereInput | ListingsScalarWhereInput[]
    OR?: ListingsScalarWhereInput[]
    NOT?: ListingsScalarWhereInput | ListingsScalarWhereInput[]
    id?: StringFilter<"Listings"> | string
    title?: StringFilter<"Listings"> | string
    description?: StringNullableFilter<"Listings"> | string | null
    price?: FloatFilter<"Listings"> | number
    createdAt?: DateTimeFilter<"Listings"> | Date | string
    updatedAt?: DateTimeFilter<"Listings"> | Date | string
    street_name?: StringFilter<"Listings"> | string
    userId?: StringFilter<"Listings"> | string
    images?: StringNullableListFilter<"Listings">
    available_from?: DateTimeFilter<"Listings"> | Date | string
    ensuite?: BoolFilter<"Listings"> | boolean
    listingType?: EnumListingTypeFilter<"Listings"> | $Enums.ListingType
    maxGuestsInRoom?: IntFilter<"Listings"> | number
    totalBathrooms?: IntFilter<"Listings"> | number
    totalBedrooms?: IntFilter<"Listings"> | number
    totalOccupants?: IntFilter<"Listings"> | number
    localitySlug?: StringFilter<"Listings"> | string
    contactNumber?: StringNullableFilter<"Listings"> | string | null
    contactNumberExtension?: StringNullableFilter<"Listings"> | string | null
  }

  export type ReviewUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutAuthorInput, ReviewUncheckedUpdateWithoutAuthorInput>
    create: XOR<ReviewCreateWithoutAuthorInput, ReviewUncheckedCreateWithoutAuthorInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutAuthorInput, ReviewUncheckedUpdateWithoutAuthorInput>
  }

  export type ReviewUpdateManyWithWhereWithoutAuthorInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    authorId?: StringFilter<"Review"> | string
    revieweeId?: StringFilter<"Review"> | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutRevieweeInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutRevieweeInput, ReviewUncheckedUpdateWithoutRevieweeInput>
    create: XOR<ReviewCreateWithoutRevieweeInput, ReviewUncheckedCreateWithoutRevieweeInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutRevieweeInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutRevieweeInput, ReviewUncheckedUpdateWithoutRevieweeInput>
  }

  export type ReviewUpdateManyWithWhereWithoutRevieweeInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutRevieweeInput>
  }

  export type ListingsCreateWithoutLocalityInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    street_name: string
    images?: ListingsCreateimagesInput | string[]
    available_from: Date | string
    ensuite?: boolean
    listingType: $Enums.ListingType
    maxGuestsInRoom?: number
    totalBathrooms: number
    totalBedrooms: number
    totalOccupants: number
    contactNumber?: string | null
    contactNumberExtension?: string | null
    amenities?: ListingAmenityCreateNestedManyWithoutListingInput
    user: UserCreateNestedOneWithoutListingsInput
  }

  export type ListingsUncheckedCreateWithoutLocalityInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    street_name: string
    userId: string
    images?: ListingsCreateimagesInput | string[]
    available_from: Date | string
    ensuite?: boolean
    listingType: $Enums.ListingType
    maxGuestsInRoom?: number
    totalBathrooms: number
    totalBedrooms: number
    totalOccupants: number
    contactNumber?: string | null
    contactNumberExtension?: string | null
    amenities?: ListingAmenityUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingsCreateOrConnectWithoutLocalityInput = {
    where: ListingsWhereUniqueInput
    create: XOR<ListingsCreateWithoutLocalityInput, ListingsUncheckedCreateWithoutLocalityInput>
  }

  export type ListingsCreateManyLocalityInputEnvelope = {
    data: ListingsCreateManyLocalityInput | ListingsCreateManyLocalityInput[]
    skipDuplicates?: boolean
  }

  export type ListingsUpsertWithWhereUniqueWithoutLocalityInput = {
    where: ListingsWhereUniqueInput
    update: XOR<ListingsUpdateWithoutLocalityInput, ListingsUncheckedUpdateWithoutLocalityInput>
    create: XOR<ListingsCreateWithoutLocalityInput, ListingsUncheckedCreateWithoutLocalityInput>
  }

  export type ListingsUpdateWithWhereUniqueWithoutLocalityInput = {
    where: ListingsWhereUniqueInput
    data: XOR<ListingsUpdateWithoutLocalityInput, ListingsUncheckedUpdateWithoutLocalityInput>
  }

  export type ListingsUpdateManyWithWhereWithoutLocalityInput = {
    where: ListingsScalarWhereInput
    data: XOR<ListingsUpdateManyMutationInput, ListingsUncheckedUpdateManyWithoutLocalityInput>
  }

  export type UserCreateWithoutReviewsWrittenInput = {
    id?: string
    f_user_id: string
    email: string
    email_verified: boolean
    picture?: string | null
    name?: string | null
    role?: $Enums.Role
    lastSignedIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingsCreateNestedManyWithoutUserInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
  }

  export type UserUncheckedCreateWithoutReviewsWrittenInput = {
    id?: string
    f_user_id: string
    email: string
    email_verified: boolean
    picture?: string | null
    name?: string | null
    role?: $Enums.Role
    lastSignedIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingsUncheckedCreateNestedManyWithoutUserInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type UserCreateOrConnectWithoutReviewsWrittenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsWrittenInput, UserUncheckedCreateWithoutReviewsWrittenInput>
  }

  export type UserCreateWithoutReviewsReceivedInput = {
    id?: string
    f_user_id: string
    email: string
    email_verified: boolean
    picture?: string | null
    name?: string | null
    role?: $Enums.Role
    lastSignedIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingsCreateNestedManyWithoutUserInput
    reviewsWritten?: ReviewCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutReviewsReceivedInput = {
    id?: string
    f_user_id: string
    email: string
    email_verified: boolean
    picture?: string | null
    name?: string | null
    role?: $Enums.Role
    lastSignedIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listings?: ListingsUncheckedCreateNestedManyWithoutUserInput
    reviewsWritten?: ReviewUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutReviewsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
  }

  export type UserUpsertWithoutReviewsWrittenInput = {
    update: XOR<UserUpdateWithoutReviewsWrittenInput, UserUncheckedUpdateWithoutReviewsWrittenInput>
    create: XOR<UserCreateWithoutReviewsWrittenInput, UserUncheckedCreateWithoutReviewsWrittenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsWrittenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsWrittenInput, UserUncheckedUpdateWithoutReviewsWrittenInput>
  }

  export type UserUpdateWithoutReviewsWrittenInput = {
    id?: StringFieldUpdateOperationsInput | string
    f_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastSignedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingsUpdateManyWithoutUserNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsWrittenInput = {
    id?: StringFieldUpdateOperationsInput | string
    f_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastSignedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingsUncheckedUpdateManyWithoutUserNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUpsertWithoutReviewsReceivedInput = {
    update: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
    create: XOR<UserCreateWithoutReviewsReceivedInput, UserUncheckedCreateWithoutReviewsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsReceivedInput, UserUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type UserUpdateWithoutReviewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    f_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastSignedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingsUpdateManyWithoutUserNestedInput
    reviewsWritten?: ReviewUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    f_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastSignedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: ListingsUncheckedUpdateManyWithoutUserNestedInput
    reviewsWritten?: ReviewUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ListingAmenityCreateWithoutListingInput = {
    amenity: AmenityCreateNestedOneWithoutListingsInput
  }

  export type ListingAmenityUncheckedCreateWithoutListingInput = {
    amenityId: number
  }

  export type ListingAmenityCreateOrConnectWithoutListingInput = {
    where: ListingAmenityWhereUniqueInput
    create: XOR<ListingAmenityCreateWithoutListingInput, ListingAmenityUncheckedCreateWithoutListingInput>
  }

  export type ListingAmenityCreateManyListingInputEnvelope = {
    data: ListingAmenityCreateManyListingInput | ListingAmenityCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type LocalityCreateWithoutListingsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
  }

  export type LocalityUncheckedCreateWithoutListingsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slug: string
  }

  export type LocalityCreateOrConnectWithoutListingsInput = {
    where: LocalityWhereUniqueInput
    create: XOR<LocalityCreateWithoutListingsInput, LocalityUncheckedCreateWithoutListingsInput>
  }

  export type UserCreateWithoutListingsInput = {
    id?: string
    f_user_id: string
    email: string
    email_verified: boolean
    picture?: string | null
    name?: string | null
    role?: $Enums.Role
    lastSignedIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewsWritten?: ReviewCreateNestedManyWithoutAuthorInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeInput
  }

  export type UserUncheckedCreateWithoutListingsInput = {
    id?: string
    f_user_id: string
    email: string
    email_verified: boolean
    picture?: string | null
    name?: string | null
    role?: $Enums.Role
    lastSignedIn?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewsWritten?: ReviewUncheckedCreateNestedManyWithoutAuthorInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeInput
  }

  export type UserCreateOrConnectWithoutListingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
  }

  export type ListingAmenityUpsertWithWhereUniqueWithoutListingInput = {
    where: ListingAmenityWhereUniqueInput
    update: XOR<ListingAmenityUpdateWithoutListingInput, ListingAmenityUncheckedUpdateWithoutListingInput>
    create: XOR<ListingAmenityCreateWithoutListingInput, ListingAmenityUncheckedCreateWithoutListingInput>
  }

  export type ListingAmenityUpdateWithWhereUniqueWithoutListingInput = {
    where: ListingAmenityWhereUniqueInput
    data: XOR<ListingAmenityUpdateWithoutListingInput, ListingAmenityUncheckedUpdateWithoutListingInput>
  }

  export type ListingAmenityUpdateManyWithWhereWithoutListingInput = {
    where: ListingAmenityScalarWhereInput
    data: XOR<ListingAmenityUpdateManyMutationInput, ListingAmenityUncheckedUpdateManyWithoutListingInput>
  }

  export type ListingAmenityScalarWhereInput = {
    AND?: ListingAmenityScalarWhereInput | ListingAmenityScalarWhereInput[]
    OR?: ListingAmenityScalarWhereInput[]
    NOT?: ListingAmenityScalarWhereInput | ListingAmenityScalarWhereInput[]
    listingId?: StringFilter<"ListingAmenity"> | string
    amenityId?: IntFilter<"ListingAmenity"> | number
  }

  export type LocalityUpsertWithoutListingsInput = {
    update: XOR<LocalityUpdateWithoutListingsInput, LocalityUncheckedUpdateWithoutListingsInput>
    create: XOR<LocalityCreateWithoutListingsInput, LocalityUncheckedCreateWithoutListingsInput>
    where?: LocalityWhereInput
  }

  export type LocalityUpdateToOneWithWhereWithoutListingsInput = {
    where?: LocalityWhereInput
    data: XOR<LocalityUpdateWithoutListingsInput, LocalityUncheckedUpdateWithoutListingsInput>
  }

  export type LocalityUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type LocalityUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutListingsInput = {
    update: XOR<UserUpdateWithoutListingsInput, UserUncheckedUpdateWithoutListingsInput>
    create: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListingsInput, UserUncheckedUpdateWithoutListingsInput>
  }

  export type UserUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    f_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastSignedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewsWritten?: ReviewUpdateManyWithoutAuthorNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeNestedInput
  }

  export type UserUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    f_user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified?: BoolFieldUpdateOperationsInput | boolean
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastSignedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewsWritten?: ReviewUncheckedUpdateManyWithoutAuthorNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeNestedInput
  }

  export type ListingAmenityCreateWithoutAmenityInput = {
    listing: ListingsCreateNestedOneWithoutAmenitiesInput
  }

  export type ListingAmenityUncheckedCreateWithoutAmenityInput = {
    listingId: string
  }

  export type ListingAmenityCreateOrConnectWithoutAmenityInput = {
    where: ListingAmenityWhereUniqueInput
    create: XOR<ListingAmenityCreateWithoutAmenityInput, ListingAmenityUncheckedCreateWithoutAmenityInput>
  }

  export type ListingAmenityCreateManyAmenityInputEnvelope = {
    data: ListingAmenityCreateManyAmenityInput | ListingAmenityCreateManyAmenityInput[]
    skipDuplicates?: boolean
  }

  export type ListingAmenityUpsertWithWhereUniqueWithoutAmenityInput = {
    where: ListingAmenityWhereUniqueInput
    update: XOR<ListingAmenityUpdateWithoutAmenityInput, ListingAmenityUncheckedUpdateWithoutAmenityInput>
    create: XOR<ListingAmenityCreateWithoutAmenityInput, ListingAmenityUncheckedCreateWithoutAmenityInput>
  }

  export type ListingAmenityUpdateWithWhereUniqueWithoutAmenityInput = {
    where: ListingAmenityWhereUniqueInput
    data: XOR<ListingAmenityUpdateWithoutAmenityInput, ListingAmenityUncheckedUpdateWithoutAmenityInput>
  }

  export type ListingAmenityUpdateManyWithWhereWithoutAmenityInput = {
    where: ListingAmenityScalarWhereInput
    data: XOR<ListingAmenityUpdateManyMutationInput, ListingAmenityUncheckedUpdateManyWithoutAmenityInput>
  }

  export type AmenityCreateWithoutListingsInput = {
    slug: string
    label: string
  }

  export type AmenityUncheckedCreateWithoutListingsInput = {
    slug: string
    label: string
    id?: number
  }

  export type AmenityCreateOrConnectWithoutListingsInput = {
    where: AmenityWhereUniqueInput
    create: XOR<AmenityCreateWithoutListingsInput, AmenityUncheckedCreateWithoutListingsInput>
  }

  export type ListingsCreateWithoutAmenitiesInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    street_name: string
    images?: ListingsCreateimagesInput | string[]
    available_from: Date | string
    ensuite?: boolean
    listingType: $Enums.ListingType
    maxGuestsInRoom?: number
    totalBathrooms: number
    totalBedrooms: number
    totalOccupants: number
    contactNumber?: string | null
    contactNumberExtension?: string | null
    locality: LocalityCreateNestedOneWithoutListingsInput
    user: UserCreateNestedOneWithoutListingsInput
  }

  export type ListingsUncheckedCreateWithoutAmenitiesInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    street_name: string
    userId: string
    images?: ListingsCreateimagesInput | string[]
    available_from: Date | string
    ensuite?: boolean
    listingType: $Enums.ListingType
    maxGuestsInRoom?: number
    totalBathrooms: number
    totalBedrooms: number
    totalOccupants: number
    localitySlug: string
    contactNumber?: string | null
    contactNumberExtension?: string | null
  }

  export type ListingsCreateOrConnectWithoutAmenitiesInput = {
    where: ListingsWhereUniqueInput
    create: XOR<ListingsCreateWithoutAmenitiesInput, ListingsUncheckedCreateWithoutAmenitiesInput>
  }

  export type AmenityUpsertWithoutListingsInput = {
    update: XOR<AmenityUpdateWithoutListingsInput, AmenityUncheckedUpdateWithoutListingsInput>
    create: XOR<AmenityCreateWithoutListingsInput, AmenityUncheckedCreateWithoutListingsInput>
    where?: AmenityWhereInput
  }

  export type AmenityUpdateToOneWithWhereWithoutListingsInput = {
    where?: AmenityWhereInput
    data: XOR<AmenityUpdateWithoutListingsInput, AmenityUncheckedUpdateWithoutListingsInput>
  }

  export type AmenityUpdateWithoutListingsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type AmenityUncheckedUpdateWithoutListingsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type ListingsUpsertWithoutAmenitiesInput = {
    update: XOR<ListingsUpdateWithoutAmenitiesInput, ListingsUncheckedUpdateWithoutAmenitiesInput>
    create: XOR<ListingsCreateWithoutAmenitiesInput, ListingsUncheckedCreateWithoutAmenitiesInput>
    where?: ListingsWhereInput
  }

  export type ListingsUpdateToOneWithWhereWithoutAmenitiesInput = {
    where?: ListingsWhereInput
    data: XOR<ListingsUpdateWithoutAmenitiesInput, ListingsUncheckedUpdateWithoutAmenitiesInput>
  }

  export type ListingsUpdateWithoutAmenitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street_name?: StringFieldUpdateOperationsInput | string
    images?: ListingsUpdateimagesInput | string[]
    available_from?: DateTimeFieldUpdateOperationsInput | Date | string
    ensuite?: BoolFieldUpdateOperationsInput | boolean
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    maxGuestsInRoom?: IntFieldUpdateOperationsInput | number
    totalBathrooms?: IntFieldUpdateOperationsInput | number
    totalBedrooms?: IntFieldUpdateOperationsInput | number
    totalOccupants?: IntFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumberExtension?: NullableStringFieldUpdateOperationsInput | string | null
    locality?: LocalityUpdateOneRequiredWithoutListingsNestedInput
    user?: UserUpdateOneRequiredWithoutListingsNestedInput
  }

  export type ListingsUncheckedUpdateWithoutAmenitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street_name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    images?: ListingsUpdateimagesInput | string[]
    available_from?: DateTimeFieldUpdateOperationsInput | Date | string
    ensuite?: BoolFieldUpdateOperationsInput | boolean
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    maxGuestsInRoom?: IntFieldUpdateOperationsInput | number
    totalBathrooms?: IntFieldUpdateOperationsInput | number
    totalBedrooms?: IntFieldUpdateOperationsInput | number
    totalOccupants?: IntFieldUpdateOperationsInput | number
    localitySlug?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumberExtension?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListingsCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    street_name: string
    images?: ListingsCreateimagesInput | string[]
    available_from: Date | string
    ensuite?: boolean
    listingType: $Enums.ListingType
    maxGuestsInRoom?: number
    totalBathrooms: number
    totalBedrooms: number
    totalOccupants: number
    localitySlug: string
    contactNumber?: string | null
    contactNumberExtension?: string | null
  }

  export type ReviewCreateManyAuthorInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    revieweeId: string
  }

  export type ReviewCreateManyRevieweeInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    authorId: string
  }

  export type ListingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street_name?: StringFieldUpdateOperationsInput | string
    images?: ListingsUpdateimagesInput | string[]
    available_from?: DateTimeFieldUpdateOperationsInput | Date | string
    ensuite?: BoolFieldUpdateOperationsInput | boolean
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    maxGuestsInRoom?: IntFieldUpdateOperationsInput | number
    totalBathrooms?: IntFieldUpdateOperationsInput | number
    totalBedrooms?: IntFieldUpdateOperationsInput | number
    totalOccupants?: IntFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumberExtension?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: ListingAmenityUpdateManyWithoutListingNestedInput
    locality?: LocalityUpdateOneRequiredWithoutListingsNestedInput
  }

  export type ListingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street_name?: StringFieldUpdateOperationsInput | string
    images?: ListingsUpdateimagesInput | string[]
    available_from?: DateTimeFieldUpdateOperationsInput | Date | string
    ensuite?: BoolFieldUpdateOperationsInput | boolean
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    maxGuestsInRoom?: IntFieldUpdateOperationsInput | number
    totalBathrooms?: IntFieldUpdateOperationsInput | number
    totalBedrooms?: IntFieldUpdateOperationsInput | number
    totalOccupants?: IntFieldUpdateOperationsInput | number
    localitySlug?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumberExtension?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: ListingAmenityUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street_name?: StringFieldUpdateOperationsInput | string
    images?: ListingsUpdateimagesInput | string[]
    available_from?: DateTimeFieldUpdateOperationsInput | Date | string
    ensuite?: BoolFieldUpdateOperationsInput | boolean
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    maxGuestsInRoom?: IntFieldUpdateOperationsInput | number
    totalBathrooms?: IntFieldUpdateOperationsInput | number
    totalBedrooms?: IntFieldUpdateOperationsInput | number
    totalOccupants?: IntFieldUpdateOperationsInput | number
    localitySlug?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumberExtension?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewee?: UserUpdateOneRequiredWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revieweeId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revieweeId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutRevieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutReviewsWrittenNestedInput
  }

  export type ReviewUncheckedUpdateWithoutRevieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyWithoutRevieweeInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type ListingsCreateManyLocalityInput = {
    id?: string
    title: string
    description?: string | null
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    street_name: string
    userId: string
    images?: ListingsCreateimagesInput | string[]
    available_from: Date | string
    ensuite?: boolean
    listingType: $Enums.ListingType
    maxGuestsInRoom?: number
    totalBathrooms: number
    totalBedrooms: number
    totalOccupants: number
    contactNumber?: string | null
    contactNumberExtension?: string | null
  }

  export type ListingsUpdateWithoutLocalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street_name?: StringFieldUpdateOperationsInput | string
    images?: ListingsUpdateimagesInput | string[]
    available_from?: DateTimeFieldUpdateOperationsInput | Date | string
    ensuite?: BoolFieldUpdateOperationsInput | boolean
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    maxGuestsInRoom?: IntFieldUpdateOperationsInput | number
    totalBathrooms?: IntFieldUpdateOperationsInput | number
    totalBedrooms?: IntFieldUpdateOperationsInput | number
    totalOccupants?: IntFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumberExtension?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: ListingAmenityUpdateManyWithoutListingNestedInput
    user?: UserUpdateOneRequiredWithoutListingsNestedInput
  }

  export type ListingsUncheckedUpdateWithoutLocalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street_name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    images?: ListingsUpdateimagesInput | string[]
    available_from?: DateTimeFieldUpdateOperationsInput | Date | string
    ensuite?: BoolFieldUpdateOperationsInput | boolean
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    maxGuestsInRoom?: IntFieldUpdateOperationsInput | number
    totalBathrooms?: IntFieldUpdateOperationsInput | number
    totalBedrooms?: IntFieldUpdateOperationsInput | number
    totalOccupants?: IntFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumberExtension?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: ListingAmenityUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingsUncheckedUpdateManyWithoutLocalityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    street_name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    images?: ListingsUpdateimagesInput | string[]
    available_from?: DateTimeFieldUpdateOperationsInput | Date | string
    ensuite?: BoolFieldUpdateOperationsInput | boolean
    listingType?: EnumListingTypeFieldUpdateOperationsInput | $Enums.ListingType
    maxGuestsInRoom?: IntFieldUpdateOperationsInput | number
    totalBathrooms?: IntFieldUpdateOperationsInput | number
    totalBedrooms?: IntFieldUpdateOperationsInput | number
    totalOccupants?: IntFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumberExtension?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListingAmenityCreateManyListingInput = {
    amenityId: number
  }

  export type ListingAmenityUpdateWithoutListingInput = {
    amenity?: AmenityUpdateOneRequiredWithoutListingsNestedInput
  }

  export type ListingAmenityUncheckedUpdateWithoutListingInput = {
    amenityId?: IntFieldUpdateOperationsInput | number
  }

  export type ListingAmenityUncheckedUpdateManyWithoutListingInput = {
    amenityId?: IntFieldUpdateOperationsInput | number
  }

  export type ListingAmenityCreateManyAmenityInput = {
    listingId: string
  }

  export type ListingAmenityUpdateWithoutAmenityInput = {
    listing?: ListingsUpdateOneRequiredWithoutAmenitiesNestedInput
  }

  export type ListingAmenityUncheckedUpdateWithoutAmenityInput = {
    listingId?: StringFieldUpdateOperationsInput | string
  }

  export type ListingAmenityUncheckedUpdateManyWithoutAmenityInput = {
    listingId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}