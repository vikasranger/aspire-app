import {TextField} from "@mui/material";
import {Box} from "@mui/material";
import {useEffect} from "react";
import {useCallback} from "react";
import {FieldValues} from "react-hook-form";
import {FormProvider, useForm} from "react-hook-form";
import {Theme} from "../../../base/theme/Theme.ts";
import {px} from "../../../base/theme/Theme.ts";
import LayoutFlexColumn from "../../raw/LayoutFlexColumn.tsx";

type Inputs = {
  name: string
  purpose: string,
  limit: number
}

export interface IFormRef
{
  remoteSubmit(values?: FieldValues): void;

  getValues(): FieldValues;

  onWatch(key: string, value: string): void;

  error: boolean;
}

//This is only for new card creation , we have to make it generic
export default function Form(props: {
  onSubmit: (values: FieldValues) => void,
  onWatch?: (key: string, value?: any) => void,
  onSubmitEnable?: (enable: boolean) => void,
  cbRef?: IFormRef,
})
{
  const {
    onSubmit,
    cbRef,
    onWatch,
    onSubmitEnable
  } = props;
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: {
      isValid,
      errors
    }
  } = useForm<Inputs>();

  const cbOnSubmit = useCallback((values: FieldValues) =>
  {
    onSubmit && onSubmit(values);
  }, [onSubmit]);

  const refSubmit = useCallback(() =>
  {
    handleSubmit((data) => cbOnSubmit(data), () =>
    {
      cbOnSubmit(getValues());
    })();
  }, [cbOnSubmit, getValues, handleSubmit]);

  const refGetValues = useCallback(() =>
  {
    return getValues();
  }, [getValues]);

  const gapStd = px(Theme.gap.std);
  const methods = useForm({
    mode: "all",
    //resolver: yupResolver(getSchema(defnForm)),
    defaultValues: {},
    shouldFocusError: false
  });

  if(cbRef)
  {
    cbRef.remoteSubmit = refSubmit;
    cbRef.getValues = refGetValues;
    cbRef.error = Boolean(errors.name) || Boolean(errors.purpose);
  }

  useEffect(() =>
  {
    watch((values, {name}) =>
    {
      name && onWatch && onWatch(name, values[name]);
    });
  }, [watch, onWatch]);

  useEffect(() =>
  {
    if(onSubmitEnable)
    {
      onSubmitEnable((isValid));
    }

  }, [isValid, onSubmitEnable]);

  return (
    <FormProvider {...methods}>
      <Box
        component={"form"}
        width={"100%"}
        height={"100%"}
        onSubmit={handleSubmit(cbOnSubmit)}
        noValidate
        autoComplete="off"
        display={"flex"}
        position={"relative"}
        zIndex={1}
      >
        <LayoutFlexColumn width={"100%"} padding={gapStd}>
          <TextField
            fullWidth={true}
            required={true}
            label="Card name"
            color="success"
            size={"small"}
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
            {...register("name", {required: "Name is required"})}
          />
          <TextField
            fullWidth={true}
            required={true}
            label="Card purpose"
            color="success"
            size={"small"}
            error={Boolean(errors.purpose)}
            helperText={errors.purpose?.message}
            {...register("purpose", {required: "Purpose is required"})}
            sx={{
              marginTop: gapStd
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            type={"number"}
            label="Spend limit"
            color="success"
            size={"small"}
            error={Boolean(errors.limit)}
            helperText={errors.limit?.message}
            {...register("limit", {required: "Spend limit is required"})}
            sx={{
              marginTop: gapStd
            }}
          />
        </LayoutFlexColumn>
      </Box>
    </FormProvider>
  );
}
