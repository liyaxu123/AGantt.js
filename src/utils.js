import dayjs from "dayjs";

// 一天的毫秒数
export const ONE_DAY_MS = 86400000;
// 图表最小比例
export const MIN_VIEW_RATE = 0.5;
// 图表头部时间轴高度
export const HEADER_HEIGHT = 57;
export const TOP_PADDING = 0;

// 视图日视图、周视图、月视图、季视图、年视图
export const viewTypeList = [
  {
    type: 'day',
    label: '日视图',
    value: 2880, // 一个格子宽度为30px, 一天24*60*60秒 / 30px = 2880秒/px
  },
  {
    type: 'week',
    label: '周视图',
    value: 3600, // 一个格子宽度为168px, 一周24*60*60*7秒 / 168px = 36000秒/px
  },
  {
    type: 'month',
    label: '月视图',
    value: 14400,
  },
  {
    type: 'quarter',
    label: '季视图',
    value: 86400,
  },
  {
    type: 'halfYear',
    label: '年视图',
    value: 115200,
  },
];

export const getViewTypeConfig = (viewType) => {
  return viewTypeList.find((item) => item.type === viewType)
}

// 创建DOM
export const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  return element;
}

// 创建SVG元素
export const createSvgElement = (tagName, props = {}) => {
  const element = document.createElementNS('http://www.w3.org/2000/svg', tagName);

  for (const key in props) {
    const value = props[key];
    element.setAttribute(key, value);
  }

  return element;
}

export const addPrefixCls = (str, prefixCls = 'my-gantt') => {
  return `${prefixCls}-${str}`;
}

export const handleDrag = (element, { onDragBefore, onDraging, onDragEnd }, step) => {
  let positionX = 0;
  let accumulatedMove = 0;  // 累计移动的距离

  const handleMouseMove = (ev) => {
    ev.stopPropagation();
    ev.preventDefault();

    const moveX = ev.clientX;
    const deltaX = moveX - positionX; // 当前鼠标相对初始位置的位移

    if (step) {
      accumulatedMove += deltaX;  // 累积移动的距离
      positionX = ev.clientX;  // 更新初始位置为当前鼠标位置

      // 判断是否超过步长，如果超过，更新宽度
      if (Math.abs(accumulatedMove) >= step) {
        const steps = Math.floor(accumulatedMove / step);  // 计算完整步长的数量
        onDraging?.(steps);
        accumulatedMove = 0;  // 重置累计移动距离
      }
    } else {
      onDraging?.(deltaX);
    }
  }

  const handleMouseUp = (event) => {
    event.stopPropagation();
    event.preventDefault();

    onDragEnd?.();
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  }

  const handleMouseDown = (event) => {
    onDragBefore?.(event);
    event.stopPropagation();
    event.preventDefault();

    positionX = event.clientX;
    accumulatedMove = 0; // 重置累计移动距离 
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }

  element.addEventListener('mousedown', handleMouseDown)
}

// 使宽度按步长调整
export const snap = (width, step) => Math.round(width / step) * step;