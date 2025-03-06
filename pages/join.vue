<template>
  <div class="join">
    <img src="/images/join_banner.jpg" class="banner" />
    <div class="section join-form">
      <h2>今日仅剩 <span>6</span> 个开店扶持名额</h2>
      <p>立即填写表单</p>
      <i>&nbsp;</i>

      <div class="formbox">
        <div>
          <el-form
            :model="formData"
            :rules="rules"
            ref="ruleFormRef"
            class="join-form-inline"
          >
            <div class="form-input">
              <el-form-item prop="name">
                <el-input
                  v-model="formData.name"
                  placeholder="请输入您的姓名"
                  size="large"
                  clearable
                />
              </el-form-item>
              <el-form-item prop="phone">
                <el-input
                  v-model="formData.phone"
                  placeholder="请输入您的电话"
                  size="large"
                  clearable
                />
              </el-form-item>
              <el-form-item prop="region">
                <ClientOnly>
                  <el-cascader
                    v-model="formData.region"
                    size="large"
                    :options="pcaRegion"
                    placeholder="请选择您所在的城市"
                    @change="distChange"
                    clearable
                  >
                  </el-cascader>
                </ClientOnly>
              </el-form-item>
              <el-form-item prop="area">
                <el-select
                  v-model="formData.area"
                  placeholder="请选择您的店铺面积"
                  size="large"
                  style="width: 290px"
                  clearable
                >
                  <el-option label="100-200㎡" value="100-200㎡" />
                  <el-option label="200-300㎡" value="200-300㎡" />
                  <el-option label="300-500㎡" value="300-500㎡" />
                  <el-option label="500㎡以上" value="500㎡以上" />
                </el-select>
              </el-form-item>
            </div>
            <div>
              <el-form-item>
                <div class="submit-btn" @click="onSubmit(ruleFormRef)">
                  <img src="/images/join_form_btn2.jpg" />
                </div>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="join-server">
          <div>免费宣传</div>
          <div>样品返还</div>
          <div>开业指导</div>
          <div>装修全送</div>
          <div>人员培训</div>
          <div>店面设计</div>
        </div>
      </div>
    </div>
    <div class="section">
      <h2>32项品牌荣誉，全屋定制行业规则制定者之一</h2>
      <p>中国超大型全品类全屋定制家具品牌厂家</p>
      <i>&nbsp;</i>
      <div class="honors-list">
        <div>
          <img src="/images/join_ry0.jpg" />
          <p>
            荣誉名称：国家高新技术企业认证证书
            <span
              >颁发机构：安徽省科学技术厅、省财政厅、国家税务总局安徽省税务厅</span
            >
          </p>
        </div>
        <div>
          <img src="/images/join_ry1.jpg" />
          <p>
            荣誉名称：专精特新企业
            <span>颁发机构：安徽省经济和信息化局</span>
          </p>
        </div>
        <div>
          <img src="/images/join_ry2.jpg" />
          <p>
            荣誉名称：全国工商联家具装饰商会副会长单位
            <span>颁发机构：全国工商联合会家具装饰业商会</span>
          </p>
        </div>
        <div>
          <img src="/images/join_ry3.jpg" />
          <p>
            荣誉名称：中国环境标志产品认证证书
            <span>颁发机构：中华人民共和国生态环境部</span>
          </p>
        </div>
      </div>
    </div>
    <div class="section">
      <h2>央视、机场、高铁、网络等，真正广告全覆盖</h2>
      <p>易高整家定制实现“海陆空”全领域广告覆盖</p>
      <i>&nbsp;</i>
      <div class="ads-list">
        <div class="ad ad1">
          <div>
            <p>
              投放方式：行业展会<i>&nbsp;</i
              ><span>投放时间：2012年-至今，每年不低于3场行业大型展会</span>
            </p>
          </div>
        </div>
        <div>
          <div class="ad ad2">
            <div>
              <p>
                投放方式：品牌代言人<i>&nbsp;</i
                ><span>投放时间：2015年12月-至今</span>
              </p>
            </div>
          </div>
          <div class="ad ad3">
            <div>
              <p>
                投放方式：央视及地方卫视<i>&nbsp;</i
                ><span>投放时间：每年不低于5次电视广告投放</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="ads-list">
        <div class="ad ad4">
          <div>
            <p>
              投放方式：机场候机厅<i>&nbsp;</i
              ><span>投放时间：2017年1月-至今</span>
            </p>
          </div>
        </div>
        <div class="ad ad5">
          <div>
            <p>
              投放方式：高速高炮<i>&nbsp;</i
              ><span>投放时间：2014年6月-至今</span>
            </p>
          </div>
        </div>
        <div class="ad ad6">
          <div>
            <p>
              投放方式：高铁广告<i>&nbsp;</i
              ><span>投放时间：2016年9月-至今</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <h2>超大型工业4.0标准智造产业园，全系豪迈、高效运作</h2>
      <p>易高整家定制目前拥有约30万+㎡现代化产业园</p>
      <i>&nbsp;</i>
      <div class="industry-list">
        <div class="gy1">
          <div>
            <p>
              生产基地：合肥<i>&nbsp;</i
              ><span
                >介绍：综合面积达30万<sup>+</sup>㎡（包括下塘200亩规划基地）</span
              >
            </p>
          </div>
        </div>
        <div class="gy2">
          <div>
            <p>
              生产车间：标准化6S管理<i>&nbsp;</i
              ><span>介绍：整理、整顿、清扫、清洁、素养、安全</span>
            </p>
          </div>
        </div>
        <div class="gy3">
          <div>
            <p>
              设备属性：全系豪迈<i>&nbsp;</i
              ><span>介绍：纯德国进口柔性生产线，品质保障</span>
            </p>
          </div>
        </div>
        <div class="gy4">
          <div>
            <p>
              科技背景：工业智造4.0<i>&nbsp;</i
              ><span
                >介绍：强大ERP管理系统，前后端无缝衔接，智能化程度行业领先</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <h2>资源整合标杆，助力打造多维度门店盈利及运营模式</h2>
      <p>易高整家定制为每一位合作商提供多维度的店面培训与指导</p>
      <i>&nbsp;</i>
      <div class="join-ys">
        <img src="/images/join_msbg.png" />
        <p class="ys ys1">
          前期规划<span
            >与合作商共同规划符合当地消费习惯及市场定位的终端销售模式</span
          >
        </p>
        <p class="ys ys2">
          店面装修<span
            >根据公司VI系统及当地市场调研结果 免费提供装修设计及指导安装</span
          >
        </p>
        <p class="ys ys3 ys-r">
          广告宣传<span
            >提供高额补助，含传统、新媒体等多种方式，覆盖现今所有主流平台</span
          >
        </p>
        <p class="ys ys4 ys-r">
          人员培训<span
            >五大培训系统，全年度、高频次组织培训，全面提升专业技能</span
          >
        </p>
        <p class="ys ys5">
          开业指导<span
            >结合当地市场，为店面开业提供符合需求的开业活动方案及落地</span
          >
        </p>
        <p class="ys ys6">
          服务支持<span
            >配备一对一客服专员，跟踪订单、物流、发货、售后等问题</span
          >
        </p>
        <p class="ys ys7 ys-r">
          营运指导<span
            >配置区域经理，提供系统化帮扶、各类节点丰富多彩的促销活动方案</span
          >
        </p>
        <p class="ys ys8 ys-r">
          销售支持<span
            >推出对销售有帮助的宣传物料及饰品，有效帮助产品销售</span
          >
        </p>
      </div>
    </div>
    <div class="section">
      <h2>诚邀100㎡+实力经销商，共筑行业传奇</h2>
      <p>易高整家定制为每一位合作商提供多维度的店面培训与指导</p>
      <i>&nbsp;</i>
      <div class="join-fy">
        <div>
          <p>加盟成本费用</p>
          <img src="/images/join_cb.jpg" />
        </div>
        <div>
          <p>利润明细</p>
          <img src="/images/join_lr.jpg" />
        </div>
      </div>
    </div>
    <div class="section">
      <h2>独创“1+1>2职业经理人”模式 业界王牌操盘手驻点帮扶</h2>
      <p>易高商学院输出3年以上实战操盘手 整店复制易高终端盈利模式</p>
      <i>&nbsp;</i>
      <div class="join-manager">
        <div class="qes-title">
          <span></span>
          <p>作为加盟商 你可能遇到这些问题</p>
          <span></span>
        </div>
        <div class="problems">
          <div>
            <img src="/images/jon1.jpg" />
            <p>无团队管理经验</p>
          </div>
          <div>
            <img src="/images/jon2.jpg" />
            <p>无业务拓展渠道</p>
          </div>
          <div>
            <img src="/images/jon3.jpg" />
            <p>无专业产品知识</p>
          </div>
          <div>
            <img src="/images/jon4.jpg" />
            <p>无设计软件使用</p>
          </div>
          <div>
            <img src="/images/jon5.jpg" />
            <p>无营销推广策略</p>
          </div>
          <div>
            <img src="/images/jon6.jpg" />
            <p>无活动执行方案</p>
          </div>
        </div>
        <div class="qes-title">
          <span></span>
          <p>易高职业经理人，可以做什么？</p>
          <span></span>
        </div>
        <div class="todo">
          <div>
            <img src="/images/imk1.png" />
            <p>团队构建、人员培训、绩效体系、制度规范</p>
          </div>
          <div>
            <img src="/images/imk2.png" />
            <p>店面选址装修、样品选择、业务渠道拓展、营销推广</p>
          </div>
          <div>
            <img src="/images/imk3.png" />
            <p>基础性工作配合操作、协调完成</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section swiper-products">
      <h2>全屋定制领域全品类厂商，赋予产品强大竞争力</h2>
      <p>以 | 量“心”定制 | 为信念追求，坚持6S管理法则</p>
      <i>&nbsp;</i>
      <div class="swiper">
        <ClientOnly>
          <swiper-container ref="thumbsSwiper" class="my-thumbs">
            <swiper-slide
              class="slide"
              v-for="item in productsList"
              :key="item.id"
            >
              <NuxtLink class="item-link" :to="`/products/${item.id}`">
                <img :src="item.coverImage" />
                <div>
                  <h3>{{ item.name }}</h3>
                  <p>包含：{{ item.includes }}</p>
                </div>
              </NuxtLink>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>
    </div>
    <div class="section">
      <h2>聚力营销，多维度亮剑引爆品牌力</h2>
      <p>易高整家定制启动品牌升级计划，展开多维度的营销活动策略</p>
      <i>&nbsp;</i>
      <div class="yx">
        <div class="yx1">
          <div>
            <p>专属开业活动策划<span>立足本地市场，高举高打</span></p>
          </div>
        </div>

        <div>
          <img src="/images/join_yx2.jpg" />
          <img src="/images/join_yx3.jpg" />
        </div>

        <div class="yx2">
          <div>
            <p>明星季火爆现场实拍<span> 强大生产实力不惧透明化</span></p>
          </div>
        </div>
        <div>
          <img src="/images/join_yx5.jpg" />
          <img src="/images/join_yx6.jpg" />
          <img src="/images/join_yx7.jpg" />
        </div>

        <div>
          <img src="/images/join_yx8.jpg" style="width: 100%" />
        </div>
      </div>
    </div>
    <div class="dz-ad">
      <div>
        <div style="width: 250px">
          <h2>加入我们</h2>
          <span>您只需要... ...</span>
        </div>
        <div>
          <p>1.有建材或家具行业相关经营管理经验</p>
          <p>2.专卖店面积不低于100平米</p>
          <p>
            3.专卖店位置为所在区域的主要建材家具集散地，如红星、居然、建材市场等
          </p>
          <p>4.专卖店必须按易高统一规划设计装饰及运营</p>
        </div>
        <div>
          <p>5.专卖店必须专营易高产品，非经允许，不得经营其他产品</p>
          <p>6.缴纳品牌保证金及使用费</p>
          <p>7.按规定配置相关团队人员及接受总部培训及考核</p>
          <p>
            8.严格执行总部同VI标识及其他品牌形象相关资料，如广告、物料、饰品等
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CascaderValue } from "element-plus";
import { pcaTextArr, regionData, codeToText } from "element-china-area-data";
import type { FormInstance, FormRules } from "element-plus";

const pcaRegion = ref(pcaTextArr);

interface RuleForm {
  name: string;
  phone: string;
  region: string[];
  area: string;
}

const formData = reactive<RuleForm>({
  name: "",
  phone: "",
  region: [],
  area: "",
});

const distChange = (values: CascaderValue) => {
  // 如果此处获取到的values为省市区的编码组成的一个数组，类似["11","1101","110108"],使用codeToText解析出来的对应中文的省市区就是["北京市","市辖区","海淀区"]
  // console.log(values);
  if (Array.isArray(values)) {
    formData.region = values.map((item) => {
      return item.toString();
    });
  }

  // 由于values类型是CascaderValue，而我们可以看源码发现CascaderValue是一个联合类型（CascaderNodeValue | CascaderNodePathValue | (CascaderNodeValue | CascaderNodePathValue)[]），对于联合类型，我们需要按照它类型的不同的情况去做对应的处理，所以此处我们先判断当他是一个数组类型的时候
  // if (Array.isArray(values)) {
  //   // 我们在源码中可以发现CascaderValue它的每一项的值其实都是string类型或者number类型，所以我们遍历这个value，将里面的值分别赋值给province, city, district这三个变量。
  //   const [province, city, district] = values.map(
  //     // 由于codeToText是个大的对象（element-china-area-data这个库的文档里有说），所以必须对item进行一个转换成string的操作。
  //     (item) => codeToText[item.toString()]
  //   );
  //   console.log(province, city, district);
  // }
};

const ruleFormRef = ref<FormInstance>();

const rules = reactive({
  name: [
    { required: true, message: "请输入正确的名称", trigger: "blur" },
    { min: 2, max: 5, message: "名称的长度为2~5个字符", trigger: "blur" },
  ],
  phone: [{ required: true, message: "请输入正确的手机号码", trigger: "blur" }],
  region: [
    { required: true, message: "请选择您所在的地区", trigger: "change" },
  ],
  area: [{ required: true, message: "请选择您的店铺面积", trigger: "change" }],
});

const onSubmit = async (formEl: FormInstance | undefined) => {
  // console.log(formEl);
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("验证通过!", formData);
      $fetch<DataResponse<IMessage>>(`/open/messages/join/add`, {
        method: "post",
        body: {
          name: formData.name,
          phone: formData.phone,
          province: formData.region[0],
          city: formData.region[1],
          district: formData.region[2],
          area: formData.area,
        },
      })
        .then((res) => {
          if (res.code == 1000) {
            ElMessage({
              message:
                "您的信息已成功提交, 24小时内会有工作人员和您联系，请保持手机畅通。",
              type: "success",
              showClose: true,
              duration: 0,
            });

            formEl.resetFields();
          }
        })
        .catch((err) => {
          ElMessage({
            message: "请按照页面提示填写相关信息。",
            type: "error",
            showClose: true,
            duration: 0,
          });
        });
    } else {
      // console.log("error submit!", fields);
      ElMessage({
        message: "表单验证未通过，请按照页面提示填写相关信息。",
        type: "error",
      });
    }
  });
};

interface IProductsList {
  id: number;
  name: string;
  coverImage: string;
  includes: string;
}

const productsList = ref<IProductsList[] | undefined>([]);

// 获取默认产品列表数据时，请求参数不能使用filterData响应式数据，否则在点击不同的radio时会重复发送网络请求，因为
const { data } = await useFetch<DataResponsePage<IProductsList[]>>(
  "/open/products/info/page",
  {
    method: "post",
    body: { page: 1, size: 6, status: 1 },
  }
);

productsList.value = data.value?.data.list;

const thumbsSwiper = ref(null);
const swiper = useSwiper(thumbsSwiper, {
  watchSlidesProgress: true,
  speed: 1000,
  spaceBetween: 20,
  slidesPerView: 4,
  freeMode: true,
  navigation: true,
});
</script>

<style lang="less" scoped>
.join {
  .banner {
    width: 100%;
    display: block;
  }

  .section {
    width: 1200px;
    margin: 80px auto;

    h2 {
      font-size: 35px;
      color: #333;
      text-align: center;

      span {
        color: #fff;
        background: var(--theme-color);
        padding: 5px 15px;
        display: inline-block;
      }
    }

    & > p {
      font-size: 18px;
      color: #666;
      text-align: center;
      padding: 20px 0 15px;
    }

    & > i {
      width: 80px;
      height: 20px;
      border-top: 1px solid #f9c152;
      display: block;
      margin: 0 auto;
    }

    .formbox {
      width: 1200px;
      height: 390px;
      border: 1px solid var(--theme-color);
      padding: 0 60px 0 300px;
      background: url(/images/join_form_bg.jpg) no-repeat;
      background-position: 60px 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .join-form-inline {
        width: 838px;
        margin-bottom: 12px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        .form-input {
          width: 600px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: space-between;

          .el-form-item {
            padding-bottom: 5px;
          }

          .el-input {
            --el-input-width: 290px;
          }

          :deep(.el-cascader) {
            width: 290px;
          }
        }

        .submit-btn {
          cursor: pointer;
          width: 216px;

          img {
            width: 100%;
            display: block;
            border-radius: 4px;
          }
        }
      }

      .join-server {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding-top: 30px;
        border-top: 1px solid #e8e8e8;

        div {
          padding: 0 20px;
          height: 35px;
          line-height: 36px;
          border-radius: 4px;
          font-size: 16px;
          color: #666;
          letter-spacing: 1px;
          background-color: rgba(249, 193, 82, 0.3);
        }
      }
    }

    .honors-list {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      margin-top: 15px;

      div {
        width: 585px;
        border: 1px solid #e8e8e8;
        margin-bottom: 30px;
        padding: 10px 10px;

        img {
          width: 100%;
          display: block;
        }

        p {
          margin-top: 10px;
          padding-left: 25px;
          font-size: 16px;
          color: #333;
          line-height: 23px;
          letter-spacing: 1px;

          span {
            font-size: 14px;
            color: #999;
            display: block;
          }
        }
      }
    }

    .ads-list {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      margin-top: 15px;
    }

    .ad {
      position: relative;
      overflow: hidden;
      div {
        position: absolute;
        background: rgba(249, 193, 82, 0.9);
        transition: top 0.5s ease-in-out;
        -moz-transition: top 0.5s ease-in-out;
        -webkit-transition: top 0.5s ease-in-out;
        -o-transition: top 0.5s ease-in-out;

        p {
          border: 1px solid #fff;
          margin: 20px auto;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          letter-spacing: 1px;
          font-size: 16px;
          color: #333;

          i {
            width: 50px;
            border-top: 1px solid #333;
            height: 1px;
            display: block;
            margin: 10px auto;
          }
        }
      }

      &:hover div {
        top: 0;
      }
    }

    .ad1 {
      background: url(/images/join_gg1.jpg) top center no-repeat;
      height: 499px;
      width: 795px;

      div {
        top: -499px;
        height: 499px;
        width: 795px;

        p {
          height: 459px;
          width: 755px;
        }
      }
    }

    .ad2 {
      background: url(/images/join_gg2.jpg) top center no-repeat;
      height: 241px;
      width: 390px;

      div {
        top: -241px;
        height: 241px;
        width: 390px;

        p {
          height: 201px;
          width: 350px;
        }
      }
    }

    .ad3 {
      background: url(/images/join_gg3.jpg) top center no-repeat;
      height: 241px;
      width: 390px;
      margin-top: 17px;

      div {
        top: -241px;
        height: 241px;
        width: 390px;

        p {
          height: 201px;
          width: 350px;
        }
      }
    }

    .ad4 {
      background: url(/images/join_gg4.jpg) top center no-repeat;
      height: 275px;
      width: 390px;

      div {
        top: -275px;
        height: 275px;
        width: 390px;

        p {
          height: 235px;
          width: 350px;
        }
      }
    }

    .ad5 {
      background: url(/images/join_gg5.jpg) top center no-repeat;
      height: 275px;
      width: 390px;

      div {
        top: -275px;
        height: 275px;
        width: 390px;

        p {
          height: 235px;
          width: 350px;
        }
      }
    }

    .ad6 {
      background: url(/images/join_gg6.jpg) top center no-repeat;
      height: 275px;
      width: 390px;

      div {
        top: -275px;
        height: 275px;
        width: 390px;
        p {
          height: 235px;
          width: 350px;
        }
      }
    }

    .industry-list {
      margin-top: 15px;

      div {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;

        p {
          width: 400px;
          font-size: 20px;
          color: #333;
          font-weight: bold;
          letter-spacing: 1px;

          i {
            width: 15px;
            height: 2px;
            border-top: 2px solid #999;
            display: block;
            margin: 10px 2px 25px;
          }

          span {
            font-size: 16px;
            color: #666;
            font-weight: normal;
          }
        }
      }

      div:nth-child(odd) {
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
      }

      div:nth-child(odd) div {
        margin-right: 100px;
      }

      div:nth-child(even) div {
        margin-left: 100px;
      }

      .gy1 {
        background: url(/images/join_gy1.jpg) top left no-repeat;
        height: 457px;
      }

      .gy2 {
        background: url(/images/join_gy2.jpg) top right no-repeat;
        height: 457px;
      }

      .gy3 {
        background: url(/images/join_gy3.jpg) top left no-repeat;
        height: 450px;
      }

      .gy4 {
        background: url(/images/join_gy4.jpg) top right no-repeat;
        height: 450px;
      }
    }

    .join-ys {
      position: relative;
      padding-top: 100px;

      .ys {
        position: absolute;
        font-size: 18px;
        font-weight: bold;
        color: #333;
        width: 315px;
        letter-spacing: 1px;

        span {
          display: block;
          font-size: 14px;
          font-weight: normal;
          color: #999;
          margin-top: 8px;
          line-height: 20px;
        }
      }

      .ys-r {
        text-align: right;
        span {
          text-align: left;
        }
      }

      .ys1 {
        top: 185px;
        left: 35px;
      }

      .ys2 {
        top: 15px;
        left: 60px;
      }

      .ys3 {
        top: 15px;
        right: 80px;
      }

      .ys4 {
        top: 185px;
        right: 110px;
      }

      .ys5 {
        top: 550px;
        left: 35px;
      }

      .ys6 {
        top: 375px;
        left: 60px;
      }

      .ys7 {
        top: 375px;
        right: 40px;
      }

      .ys8 {
        top: 550px;
        right: 170px;
      }
    }

    .join-fy {
      width: 1200px;
      margin: 30px auto 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;

      div {
        width: 585px;
        padding-bottom: 20px;
        background: #fff;
        -webkit-box-shadow: 0px 0px 10px #f2f2f2;
        box-shadow: 0px 0px 10px #f2f2f2;

        p {
          font-size: 18px;
          letter-spacing: 1px;
          color: #333;
          padding: 20px 0 20px 42px;
          margin-bottom: 25px;
          border-bottom: 1px solid #e9e9e9;
        }

        img {
          margin: 0 auto;
          display: block;
          border: none;
        }
      }
    }

    .join-manager {
      width: 1200px;
      margin: 15px auto 0;

      .qes-title {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;

        p {
          font-weight: bold;
          font-size: 22px;
          color: #333;
        }

        span {
          display: block;
          width: 30px;
          border-top: 1px solid #333;
          margin: 0 10px;
        }
      }

      .problems {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 50px;

        img {
          margin: 0 auto;
          display: block;
          border: none;
        }

        p {
          font-size: 16px;
          text-align: center;
        }
      }

      .todo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;

        div {
          border: 1px solid var(--theme-color);
          width: 370px;
          height: 230px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 35px;

          img {
            margin: 0 auto;
            display: block;
          }

          p {
            width: 280px;
            text-align: center;
            font-size: 16px;
            color: #333;
            line-height: 24px;
            margin-top: 10px;
          }
        }
      }
    }

    .yx {
      .yx1 {
        background: #f9f9f9 url(/images/join_yx1.jpg) top right no-repeat;
        height: 462px;
      }

      .yx2 {
        background: #f9f9f9 url(/images/join_yx4.jpg) top left no-repeat;
        height: 462px;

        p {
          font-size: 25px;
          font-weight: bold;
          color: #333;
          letter-spacing: 1px;
          padding-left: 940px;
          text-align: right;
        }
      }

      & > div {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin-top: 15px;

        p {
          font-size: 25px;
          font-weight: bold;
          color: #333;
          letter-spacing: 1px;
          padding-left: 40px;

          span {
            font-size: 16px;
            font-weight: normal;
            color: #999;
            letter-spacing: 1px;
            display: block;
            margin-top: 10px;
          }
        }
      }
    }
  }

  .swiper-products {
    width: 100%;

    .swiper {
      margin-top: 15px;

      .slide {
        width: 30%;

        .item-link {
          img {
            width: 100%;
            display: block;
            border: none;
          }

          div {
            width: 100%;
            padding: 20px;
            border-left: 1px solid var(--theme-color);
            border-right: 1px solid var(--theme-color);
            border-bottom: 1px solid var(--theme-color);

            h3 {
              font-size: 20px;
              color: #333;
            }

            p {
              font-size: 16px;
              color: #666;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }

  .dz-ad {
    background: url(/images/dz_ad.jpg) top center no-repeat;
    width: 100%;

    & > div {
      width: 1200px;
      height: 245px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
        width: 400px;

        h2 {
          font-size: 30px;
          margin-bottom: 10px;
        }

        span {
          font-size: 18px;
        }

        p {
          font-size: 15px;
          color: #333;
          margin-bottom: 10px;
        }
      }
    }
  }
}

// 自定义 swiper 样式，参考：https://swiperjs.com/element#parts
swiper-container::part(button-prev) {
  width: 16px;
  color: #fff;
}

swiper-container::part(button-next) {
  width: 16px;
  color: #fff;
}
</style>
