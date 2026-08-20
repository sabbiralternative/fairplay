import toast from "react-hot-toast";
import { useEditButtonValuesMutation } from "../../redux/features/events/events";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useLanguage from "../../hooks/use-language";
import { LanguageKey } from "../../const";

const StakeSettings = () => {
  const { getLanguage } = useLanguage();
  const navigate = useNavigate();
  const [editButtonValue] = useEditButtonValuesMutation();
  const stakes = JSON.parse(localStorage.getItem("buttonValue"));
  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      buttonGameValues: stakes,
    },
  });

  const buttonGameValues = watch("buttonGameValues");

  const onSubmit = async () => {
    const payload = {
      game: buttonGameValues?.map((btn) => ({
        label: parseFloat(btn?.label),
        value: parseFloat(btn?.value),
      })),
    };

    const res = await editButtonValue(payload).unwrap();
    if (res.success) {
      toast.success(res?.result?.message);
      localStorage.removeItem("buttonValue");
      const gameButtonsValues = buttonGameValues;
      localStorage.setItem("buttonValue", JSON.stringify(gameButtonsValues));
      navigate(-1);
    }
  };
  return (
    <main id="main" className="main">
      <div className="tab-content-main">
        <div className="ng-star-inserted">
          <div className="ac_screens">
            <div className="breadcrumb-section">
              <a
                className="back__btn ng-star-inserted"
                onClick={() => navigate(-1)}
              >
                <i className="mdi mdi-chevron-left" />
              </a>

              <span className="event___name">
                {getLanguage(LanguageKey.EDIT_STAKE)}
              </span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="container my-2">
              <div className="row mb-1">
                <div className="col-md-3 col-6">
                  <div className="button-title">
                    <span>
                      <b>{getLanguage(LanguageKey.STAKE_LABEL)}</b>
                    </span>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="button-title">
                    <span>
                      <b>{getLanguage(LanguageKey.STAKE_VALUE)}</b>
                    </span>
                  </div>
                </div>
              </div>
              {stakes?.map((stake, i) => {
                return (
                  <div key={i} className="row mb-1 ng-star-inserted">
                    <div className="col-md-3 col-6">
                      <div className="form-group mb-0">
                        <input
                          {...register(`buttonGameValues.${i}.label`)}
                          type="text"
                          className="form-control ng-pristine ng-valid ng-touched"
                          placeholder="Enter Label"
                          defaultValue={stake?.label}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="form-group mb-0">
                        <input
                          type="number"
                          {...register(`buttonGameValues.${i}.value`)}
                          className="form-control ng-untouched ng-pristine ng-valid"
                          placeholder="Enter Value"
                          defaultValue={stake?.value}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="row mt-2">
                <div className="col-12">
                  <button type="submit" className="v-btn demobtn">
                    {getLanguage(LanguageKey.UPDATE)}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StakeSettings;
