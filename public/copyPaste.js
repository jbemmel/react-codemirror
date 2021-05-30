const code = `import React, {PropTypes, Component} from 'react';
import Select from './Select';
import classNames from './classNames.js';

const cx = classNames('HitsPerPage');

class HitsPerPage extends Component {
  static propTypes = {
    refine: PropTypes.func.isRequired,
    currentRefinement: PropTypes.number.isRequired,
    transformItems: PropTypes.func,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        label: PropTypes.string,
      })
    ),
  };

  render() {
    return (
      <Select
        items={items}
        cx={cx}
      />
    );
  }
}

export default HitsPerPage;`;
CodeMirror.runMode(code, 'jsx', document.querySelector('code'));

activateClipboard(Array.prototype.slice.call(document.querySelectorAll('.code-sample')));

function activateClipboard(codeSamples) {
  console.log(codeSamples)
  codeSamples.forEach(codeSample => {
    const cleanAfter = 500;
    let timeout;
    const copyToClipboard = document.createElement('span');

    const setup = () => {
      clearTimeout(timeout);
      copyToClipboard.textContent = 'Copy to clipboard';
      copyToClipboard.classList.remove('clipboard-done');
      copyToClipboard.classList.add('clipboard');
    };

    const done = () => {
      copyToClipboard.classList.add('clipboard-done');
      copyToClipboard.textContent = 'Copied!';
    };

    const clipboard = new Clipboard(copyToClipboard, {
      text: () => codeSample.querySelector('code').textContent,
    });

    setup();
    codeSample.querySelector('.heading').appendChild(copyToClipboard);
    copyToClipboard.addEventListener('mouseleave', setup, true);
    clipboard.on('success', () => {
      done();
      timeout = setTimeout(setup, cleanAfter);
    });
  });
}
