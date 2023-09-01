import { Distribution } from "common";
import Joi from "joi";

export interface ErrorResponse {
  error: string;
}

export interface DailySnapshotRequestBody {
  dayId: number;
  distribution: Distribution[];
  totalWeeklyRewards: string;
}

export interface WeeklySnapshotRequestBody {
  weekId: number;
  distribution: Distribution[];
  totalWeeklyRewards: string;
}
export interface TokenPairRequestBody {
  pairs: string[][]; // [[collateralAddress, quoteTokenAddress], ...
}
export interface TokenRequestBody {
  token: string;
}
export interface CuratedTokensRequestBody {
  tokens: string[];
}
export const weeklySnapshotRequestBodySchema = Joi.object<WeeklySnapshotRequestBody>({
  weekId: Joi.number().required(),
  distribution: Joi.array()
    .items(
      Joi.object<Distribution>({
        address: Joi.string().required(),
        share: Joi.number().required(),
        name: Joi.string().required(),
        lendRatio: Joi.number().optional(),
      })
    )
    .required(),
  totalWeeklyRewards: Joi.string().required(),
});

export const dailySnapshotRequestBodySchema = Joi.object<DailySnapshotRequestBody>({
  dayId: Joi.number().required(),
  distribution: Joi.array()
    .items(
      Joi.object<Distribution>({
        address: Joi.string().required(),
        share: Joi.number().required(),
        name: Joi.string().required(),
        lendRatio: Joi.number().optional(),
      })
    )
    .required(),
  totalWeeklyRewards: Joi.string().required(),
});
export const tokenPairRequestBodySchema = Joi.object<TokenPairRequestBody>({
  pairs: Joi.array().items(Joi.array().items(Joi.string())).required(),
});

export const tokenRequestBodySchema = Joi.object<TokenRequestBody>({
  token: Joi.string().required(),
});

export const curatedTokensRequestBodySchema = Joi.object<CuratedTokensRequestBody>({
  tokens: Joi.array().items(Joi.string()).required(),
});

export interface SchemaMap {
  [key: string]: Joi.ObjectSchema<any>;
}

export const schemaMap: SchemaMap = {
  DailySnapshotRequestBody: dailySnapshotRequestBodySchema,
  WeeklySnapshotRequestBody: weeklySnapshotRequestBodySchema,
  TokenPairRequestBody: tokenPairRequestBodySchema,
  TokenRequestBody: tokenRequestBodySchema,
  CuratedTokensRequestBody: curatedTokensRequestBodySchema,
};
